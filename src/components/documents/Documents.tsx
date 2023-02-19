import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { commonStyles } from 'components/common.styles'
import { reactStyles, styles } from './documents.styles'

interface DocumentItem {
  id: string
  label: string
  path: string
}

const neighborhoodItems: DocumentItem[] = [
  {
    id: 'ley-subdivision-covenants',
    label: 'Covenants',
    path: '/documents/ley-subdivision-covenants.pdf',
  },
]

const Documents = () => (
  <Box sx={commonStyles.pageContent}>
    {!!neighborhoodItems.length && (
      <Box sx={styles.listContainer}>
        <Typography variant="h3">Neighborhood</Typography>
        <ul style={reactStyles.list}>
          {neighborhoodItems.map((item) => (
            <li key={item.id} style={reactStyles.item}>
              <Link href={item.path} target={item.id}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    )}
  </Box>
)

export default Documents
