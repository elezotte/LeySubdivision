import { ListIconTypes, ListItem } from 'components/common/itemList/ItemList'

export const custerCountyItems: ListItem[] = [
  {
    id: 'custer-county-zoning-districts',
    label: 'Custer County Subdivisions and Zoning Districts',
    path: '/documents/custer-county/custer-county-zoning-districts.pdf',
    iconType: ListIconTypes.DOCUMENT,
  },
  {
    id: 'westcliffe-town',
    label: 'Westcliffe Website',
    path: 'https://townofwestcliffe.colorado.gov',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'wet-mountain-valley',
    label: 'Wet Mountain Valley Website',
    path: 'https://visitwetmountainvalley.com',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'dark-skies',
    label: 'Dark Skies Website',
    path: 'https://www.darkskiescolorado.org/',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'hiking-nearby',
    label: 'Hiking Nearby',
    path: 'https://www.alltrails.com/us/colorado/westcliffe',
    iconType: ListIconTypes.WEBSITE,
    rel: 'external',
  },
  {
    id: 'hiking-nearby',
    label: 'Sangre De Cristo Peaks',
    path: '/images/westcliffe-peaks.jpg',
    iconType: ListIconTypes.PHOTO,
  },
]
