import MarkerIcon from '@mui/icons-material/Room'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import GoogleMapReact, { Maps } from 'google-map-react'
import { styles } from './about.styles'

const mapProps = {
  center: {
    lat: parseFloat(process.env.GOOGLE_MAPS_LAT as string),
    lng: parseFloat(process.env.GOOGLE_MAPS_LON as string),
  },
  zoom: 15,
}

const MapMarker = () => <MarkerIcon sx={styles.marker} />

export default function About() {
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
          defaultCenter={mapProps.center}
          defaultZoom={mapProps.zoom}
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
        >
          {/* @ts-ignore */}
          <MapMarker position={mapProps.center} />
        </GoogleMapReact>
      </Box>
    </>
  )
}
