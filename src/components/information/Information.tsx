import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import ItemList, {
  ListIconTypes,
  ListItem,
} from 'components/common/itemList/ItemList'
import Head from 'next/head'

const neighborhoodDocuments: ListItem[] = [
  {
    id: 'ley-subdivision-covenants',
    label: 'Covenants',
    path: '/documents/ley-subdivision-covenants.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
  {
    id: 'ley-subdivision-ditch-map',
    label: 'Irrigation Ditch Map',
    path: '/images/ley_subdivision_irrigation_ditches.jpg',
    iconType: ListIconTypes.PHOTO,
  },
  {
    id: 'ley-subdivision-electrical-map',
    label: 'Electrical Service Map',
    path: '/documents/2018_sdcea_electric_service-ley_subdivision.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
  {
    id: 'ley-subdivision-electrical-map-with-arial',
    label: 'Electrical Service Map with arial photo',
    path: '/documents/2018_sdcea_electric_service-ley_subdivision-with_arial.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
  {
    id: 'ley-subdivision-plat-map',
    label: 'Original Subdivision Plat Map',
    path: '/images/ley-subdivision-plat-map.jpg',
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
]

const historicalItems: ListItem[] = [
  {
    id: 'conquistadore-ski-area',
    label: 'Conquistador Ski Area',
    path: 'http://www.coloradoskihistory.com/lost/conquistador.html',
    iconType: ListIconTypes.WEBSITE,
  },
]

const meetingItems: ListItem[] = [
  {
    id: 'meeting-minutes-20232302',
    label: 'Meeting Minutes - 2/25/2023',
    path: 'https://docs.google.com/document/d/1QpNPNWSGF7iL0-R0QETHcZ4uRbAiH7Vi8l-8gZD2CWk/edit?usp=sharing',
    iconType: ListIconTypes.DOCUMENT,
  },
]

const Documents = () => (
  <Box sx={commonStyles.pageContent}>
    <Head>
      <title>Ley Subdivision Information</title>
    </Head>
    <Typography variant="h1">Neighborhood & Area Information</Typography>
    <ItemList items={neighborhoodDocuments} title="Neighborhood Documents" />
    <ItemList items={meetingItems} title="Neighborhood Meetings" />
    <ItemList items={custerCountyItems} title="Custer County & Westcliffe" />
    <ItemList items={historicalItems} title="Historical" />
  </Box>
)

export default Documents
