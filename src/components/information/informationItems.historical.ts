import { ListIconTypes, ListItem } from 'components/common/itemList/ItemList'

export const historicalItems: ListItem[] = [
  {
    id: 'historical-photos',
    label: 'Historical Photos of Westcliffe',
    path: 'https://digital.denverlibrary.org/nodes/search?datefrom=&dateto=&keywords=westcliffe&order=desc&orderby=relevance&ntids=W10=&page=1&viewtype=grid&type=&in=0&digital=0',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'conquistadore-ski-area',
    label: 'Conquistador Ski Area',
    path: 'http://www.coloradoskihistory.com/lost/conquistador.html',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
]
