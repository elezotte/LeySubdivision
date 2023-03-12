interface mapLatLong {
  lat: number
  lng: number
}

interface mapBounds {
  nw: mapLatLong
  se: mapLatLong
  sw: mapLatLong
  ne: mapLatLong
}

export interface MapChangeProps {
  center: {
    lat: number
    lng: number
  }
  zoom: 15
  bounds: mapBounds
  marginBounds: mapBounds
  size: {
    width: number
    height: number
  }
}

export enum MapTypes {
  ROADMAP = 'roadmap',
  SATELLITE = 'satellite',
  // HYBRID = 'hybrid',
  TERRAIN = 'terrain',
}

export const MapTypeText = {
  [MapTypes.ROADMAP]: 'Road',
  [MapTypes.SATELLITE]: 'Satellite',
  // [MapTypes.HYBRID]: 'Hybrid',
  [MapTypes.TERRAIN]: 'Terrain',
}

export const mapProps = {
  center: {
    lat: parseFloat(process.env.GOOGLE_MAPS_LAT as string),
    lng: parseFloat(process.env.GOOGLE_MAPS_LON as string),
  },
  zoom: 15,
}
