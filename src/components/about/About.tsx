import { Button, ButtonGroup } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import GoogleMapReact, { Maps } from 'google-map-react'
import { useState } from 'react'
import { styles } from './about.styles'
import { MapChangeProps, mapProps, MapTypes, MapTypeText } from './map.config'

const renderMarkers = (map: any, maps: any) =>
  new maps.Marker({
    position: mapProps.center,
    map,
  })
const handleOnLoad = (gmap: any) => renderMarkers(gmap.map, gmap.maps)
const getTypeStyles = (selectedType: MapTypes, buttonType: MapTypes) => {
  return selectedType === buttonType
    ? styles.typeButtonSelected
    : styles.typeButton
}

export default function About() {
  const [center, setCenter] = useState(mapProps.center)
  const [zoom, setZoom] = useState(mapProps.zoom)
  const [type, setType] = useState(MapTypes.TERRAIN)

  const handleOnChange = (props: MapChangeProps) => {
    setZoom(props.zoom)
    setCenter(props.center)
  }
  const handleTypeChange = (newType: MapTypes) => {
    setType(newType)
  }
  const handleMapReset = () => {
    setCenter({
      lat: mapProps.center.lat,
      lng: mapProps.center.lng,
    })
    setZoom(mapProps.zoom)
    setType(MapTypes.TERRAIN)
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
            mapTypeControl: false,
            mapTypeId: type,
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
          onClick={handleMapReset}
          sx={styles.resetButton}
          variant="contained"
        >
          Reset
        </Button>
        <ButtonGroup sx={styles.typeButtonGroup} orientation="vertical">
          {Object.entries(MapTypes).map((buttonType) => (
            <Button
              onClick={() => handleTypeChange(buttonType[1])}
              key={buttonType[1]}
              sx={getTypeStyles(type, buttonType[1])}
              variant="contained"
            >
              {MapTypeText[buttonType[1]]}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  )
}
