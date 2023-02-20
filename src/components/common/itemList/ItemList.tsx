import DocumentIcon from '@mui/icons-material/Description'
import PhotoIcon from '@mui/icons-material/PhotoOutlined'
import WebsiteIcon from '@mui/icons-material/Wysiwyg'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { reactStyles, styles } from './itemList.styles'

export enum ListIconTypes {
  DOCUMENT = 'document',
  PHOTO = 'photo',
  WEBSITE = 'website',
}
const icons = {
  [ListIconTypes.DOCUMENT]: <DocumentIcon sx={styles.listIcon} />,
  [ListIconTypes.WEBSITE]: <WebsiteIcon sx={styles.listIcon} />,
  [ListIconTypes.PHOTO]: <PhotoIcon sx={styles.listIcon} />,
}
export interface ListItem {
  id: string
  iconType: ListIconTypes
  path: string
  label: string
}
interface ItemListProps {
  title: string
  items: ListItem[]
}

const ItemList: React.FC<ItemListProps> = ({ title, items }: ItemListProps) => {
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <List dense={true} disablePadding sx={styles.list}>
        {items.map((item) => (
          <ListItem key={item.id} disablePadding disableGutters>
            <ListItemIcon sx={styles.listIconContainer} color="secondary">
              {icons[item.iconType]}
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Link
                  href={item.path}
                  style={reactStyles.link}
                  target={item.id}
                >
                  {item.label}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ItemList
