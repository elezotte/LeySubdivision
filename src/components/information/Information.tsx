import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import ItemList, {
  ListIconTypes,
  ListItem,
} from 'components/common/itemList/ItemList'

const neighborhoodItems: ListItem[] = [
  {
    id: 'ley-subdivision-plot-map',
    label: 'Original Subdivision Plot Map',
    path: '/images/ley-subdivision-plot-map.jpg',
    iconType: ListIconTypes.PHOTO,
  },
]

const custerCountyItems: ListItem[] = [
  {
    id: 'custer-county-zoning-districts',
    label: 'Custer County Subdivisions and Zoning Districts',
    path: '/documents/custer-county-zoning-districts.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
  {
    id: 'westcliffe-town',
    label: 'Westcliffe Website',
    path: 'https://townofwestcliffe.colorado.gov',
    iconType: ListIconTypes.WEBSITE,
  },
  {
    id: 'wet-mountain-valley',
    label: 'Wet Mountain Valley Website',
    path: 'https://visitwetmountainvalley.com',
    iconType: ListIconTypes.WEBSITE,
  },
  {
    id: 'dark-skies',
    label: 'Dark Skies Website',
    path: 'https://www.darkskiescolorado.org/',
    iconType: ListIconTypes.WEBSITE,
  },
  {
    id: 'westcliffe-earthquake-activity',
    label: 'Earthquake Activity Website',
    path: 'https://earthquaketrack.com/us-co-westcliffe/recent',
    iconType: ListIconTypes.WEBSITE,
  },
]

const historicalItems: ListItem[] = [
  {
    id: 'conquistadore-ski-area',
    label: 'Conquistador Ski Area',
    path: 'http://www.coloradoskihistory.com/lost/conquistador.html',
    iconType: ListIconTypes.WEBSITE,
  },
]

const Documents = () => (
  <Box sx={commonStyles.pageContent}>
    <ItemList items={neighborhoodItems} title="Neighborhood" />
    <ItemList items={custerCountyItems} title="Custer County" />
    <ItemList items={historicalItems} title="Historical" />
  </Box>
)

export default Documents
