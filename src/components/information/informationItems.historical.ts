import { ListIconTypes, ListItem } from 'components/common/itemList/ItemList'

export const historicalItems: ListItem[] = [
  {
    id: 'conquistadore-ski-area',
    label: 'Conquistador Ski Area',
    path: 'http://www.coloradoskihistory.com/lost/conquistador.html',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'historical-photos',
    label: 'Historical Photos of Westcliffe',
    path: 'https://digital.denverlibrary.org/digital/collection/p15330coll22/search/searchterm/westcliffe%2C%20colorado',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
]
