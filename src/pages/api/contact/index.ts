import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    port: parseInt(process.env.EMAIL_PORT as any),
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  })

  const emailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TARGET,
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email} | Phone: ${
      req.body.phone || '-'
    }`,
    html: `<div>${req.body.message}</div><p>Sent from: ${
      req.body.email
    }</p><p>Phone: ${req.body.phone || '-'}</p>`,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(emailData, (err: any, info: any) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  res.status(200).end()
}

export default sendEmail
