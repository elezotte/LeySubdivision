import InfoIcon from '@mui/icons-material/InfoOutlined'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import ItemList from 'components/common/itemList/ItemList'
import Head from 'next/head'
import {
  custerCountyItems,
  historicalItems,
  meetingItems,
  neighborhoodDocuments,
  treasurerItems,
} from './informationItems'

const Documents = () => (
  <Box sx={commonStyles.pageContent}>
    <Head>
      <title>Ley Subdivision Information</title>
    </Head>
    <Typography variant="h1">
      <InfoIcon sx={commonStyles.pageIcon} />
      Neighborhood & Area Information
    </Typography>
    <ItemList items={neighborhoodDocuments} title="Neighborhood Documents" />
    <ItemList items={meetingItems} title="Neighborhood Meetings" />
    <ItemList items={treasurerItems} title="Treasurer Reports" />
    <ItemList items={custerCountyItems} title="Custer County & Westcliffe" />
    <ItemList items={historicalItems} title="Historical" />
  </Box>
)

export default Documents
