import faunadb from 'faunadb'

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

const query = async (_, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('test-collection'))),
        q.Lambda((x) => q.Get(x))
      )
    )

    res.status(200).json(dbs.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default query
