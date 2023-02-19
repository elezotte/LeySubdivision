import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { commonStyles } from 'components/common.styles'
import { reactStyles, styles } from './information.styles'

interface DocumentItem {
  id: string
  label: string
  path: string
}

const neighborhoodItems: DocumentItem[] = [
  {
    id: 'ley-subdivision-plot-map',
    label: 'Original Subdivision Plot Map',
    path: '/images/ley-subdivision-plot-map.jpg',
  },
]

const custerCountyItems: DocumentItem[] = [
  {
    id: 'custer-county-zoning-districts',
    label: 'Custer County Subdivisions and Zoning Districts',
    path: '/documents/custer-county-zoning-districts.pdf',
  },
  {
    id: 'westcliffe-town',
    label: 'Westcliffe Website',
    path: 'https://townofwestcliffe.colorado.gov',
  },
  {
    id: 'wet-mountain-valley',
    label: 'Wet Mountain Valley Website',
    path: 'https://visitwetmountainvalley.com',
  },
  {
    id: 'dark-skies',
    label: 'Dark Skies Website',
    path: 'https://www.darkskiescolorado.org/',
  },
  {
    id: 'westcliffe-earthquake-activity',
    label: 'Earthquake Activity',
    path: 'https://earthquaketrack.com/us-co-westcliffe/recent',
  },
]

const historicalItems: DocumentItem[] = [
  {
    id: 'conquistadore-ski-area',
    label: 'Conquistador Ski Area',
    path: 'http://www.coloradoskihistory.com/lost/conquistador.html',
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
    {!!custerCountyItems.length && (
      <Box sx={styles.listContainer}>
        <Typography variant="h3">Custer County</Typography>
        <ul style={reactStyles.list}>
          {custerCountyItems.map((item) => (
            <li key={item.id} style={reactStyles.item}>
              <Link href={item.path} target={item.id}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    )}
    {!!historicalItems.length && (
      <Box sx={styles.listContainer}>
        <Typography variant="h3">Historical</Typography>
        <ul style={reactStyles.list}>
          {historicalItems.map((item) => (
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
