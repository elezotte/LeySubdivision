import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { commonStyles } from 'components/common.styles'
import Head from 'next/head'
import { styles } from './contacts.styles'

const Contacts = () => (
  <Box sx={commonStyles.pageContent}>
    <Head>
      <title>Contact Us</title>
    </Head>
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        Do you have questions or comments about the Ley Subdivision or this
        website? Feel free to contact us using the form below.
      </Box>
      <TextField fullWidth label="Name" size="small" sx={styles.input} />
      <TextField
        fullWidth
        label="Email"
        size="small"
        sx={styles.input}
        type="email"
      />
      <TextField
        fullWidth
        label="Phone"
        size="small"
        sx={styles.input}
        type="tel"
      />
      <TextField
        fullWidth
        label="Message"
        size="small"
        sx={styles.inputMessage}
        rows={10}
        multiline
      />
      <Box sx={styles.buttons}>
        <Button color="secondary" variant="contained" sx={styles.button}>
          Clear Form
        </Button>
        <Button color="primary" variant="contained" sx={styles.button}>
          Send Email
        </Button>
      </Box>
    </Box>
  </Box>
)

export default Contacts
