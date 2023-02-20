import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import ItemList, {
  ListIconTypes,
  ListItem,
} from 'components/common/itemList/ItemList'

const neighborhoodItems: ListItem[] = [
  {
    id: 'ley-subdivision-covenants',
    label: 'Covenants',
    path: '/documents/ley-subdivision-covenants.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
]

const Documents = () => (
  <Box sx={commonStyles.pageContent}>
    <ItemList items={neighborhoodItems} title="Neighborhood" />
  </Box>
)

export default Documents
