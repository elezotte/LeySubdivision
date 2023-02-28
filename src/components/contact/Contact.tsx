import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { commonStyles } from 'components/common.styles'
import Head from 'next/head'
import { MouseEvent, useState } from 'react'
import { styles } from './contact.styles'

const Contacts = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setName('')
    setPhone('')
    setMessage('')
  }

  const handleClear = () => {
    setSent(false)
    clearInputs()
  }

  const handleSendMessage = async (e: MouseEvent) => {
    e.preventDefault()
    setSending(true)

    const emailData = {
      name,
      email,
      phone,
      message,
    }
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    }

    await fetch('/api/contact', {
      method: 'POST',
      headers,
      body: JSON.stringify(emailData),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })

    setSent(true)
    setSending(false)
    clearInputs()
  }

  const buttonDisabled =
    !email.length || !name.length || !message.length || sending

  return (
    <Box sx={commonStyles.pageContent}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          Do you have questions or comments about the Ley Subdivision or this
          website? Feel free to contact us using the form below.
        </Box>
        <Box sx={styles.text}>
          Fields marked with an asterisk (*) are required.
        </Box>
        {sent && <Box sx={styles.sent}>You&apos;re message has been sent!</Box>}
        <TextField
          fullWidth
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          size="small"
          sx={styles.input}
          value={name}
        />
        <TextField
          fullWidth
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          size="small"
          sx={styles.input}
          type="email"
          value={email}
        />
        <TextField
          fullWidth
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
          size="small"
          sx={styles.input}
          type="tel"
          value={phone}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={10}
          size="small"
          value={message}
        />
        <Grid container sx={styles.buttons}>
          <Grid xs={6}>
            <Button
              color="secondary"
              disabled={sending}
              onClick={handleClear}
              variant="contained"
            >
              Clear Form
            </Button>
          </Grid>
          <Grid xs={6} sx={styles.submitButtonContainer}>
            {sending && <CircularProgress size={23} sx={styles.sending} />}
            <Button
              color="primary"
              disabled={buttonDisabled}
              onClick={handleSendMessage}
              sx={styles.submitButton}
              variant="contained"
            >
              Send Email
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Contacts
