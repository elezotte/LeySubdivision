import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import GoogleMapReact, { Maps } from 'google-map-react'
import { useState } from 'react'
import { styles } from './about.styles'

const lat = parseFloat(process.env.GOOGLE_MAPS_LAT as string)
const lng = parseFloat(process.env.GOOGLE_MAPS_LON as string)
const mapProps = {
  center: {
    lat,
    lng,
  },
  zoom: 15,
}

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
interface onMapChangeProps {
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

const renderMarkers = (map: any, maps: any) =>
  new maps.Marker({
    position: mapProps.center,
    map,
  })
const handleOnLoad = (gmap: any) => renderMarkers(gmap.map, gmap.maps)

export default function About() {
  const [center, setCenter] = useState(mapProps.center)
  const [zoom, setZoom] = useState(mapProps.zoom)

  const handleOnChange = (props: onMapChangeProps) => {
    setZoom(props.zoom)
    setCenter(props.center)
  }
  const handleMapReset = () => {
    setCenter({
      lat: mapProps.center.lat,
      lng: mapProps.center.lng,
    })
    setZoom(mapProps.zoom)
  }

  return (
    <>
      <Box sx={commonStyles.pageContent}>
        Some text about the area could go here
      </Box>
      <Box sx={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={
            {
              key: process.env.GOOGLE_MAPS_API_KEY,
            } as GoogleMapReact.BootstrapURLKeys
          }
          center={center}
          zoom={zoom}
          onGoogleApiLoaded={handleOnLoad}
          onChange={handleOnChange}
          options={(maps: Maps) => ({
            fullscreenControl: false,
            mapTypeControl: true,
            mapTypeId: maps.MapTypeId.TERRAIN,
            mapTypeControlOptions: {
              style: maps.MapTypeControlStyle.DROPDOWN_MENU,
              position: maps.ControlPosition.TOP_LEFT,
              mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.TERRAIN,
              ],
            },
          })}
        />
        <Button
          color="secondary"
          onClick={handleMapReset}
          sx={styles.resetButton}
          variant="contained"
        >
          Reset View
        </Button>
      </Box>
    </>
  )
}
