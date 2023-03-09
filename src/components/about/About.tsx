import AboutIcon from '@mui/icons-material/LandscapeOutlined'
import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import GoogleMapReact, { Maps } from 'google-map-react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { reactStyles, styles } from './about.styles'
import { MapChangeProps, mapProps, MapTypes, MapTypeText } from './map.config'

const getTypeStyles = (selectedType: MapTypes, buttonType: MapTypes) => {
  return selectedType === buttonType
    ? styles.typeButtonSelected
    : styles.typeButton
}
const handleOnLoad = (gmap: any) => renderMarkers(gmap.map, gmap.maps)
const renderMarkers = (map: any, maps: any) =>
  new maps.Marker({
    position: mapProps.center,
    map,
  })

export default function About() {
  const [center, setCenter] = useState(mapProps.center)
  const [type, setType] = useState(MapTypes.TERRAIN)
  const [zoom, setZoom] = useState(mapProps.zoom)

  const handleMapReset = () => {
    setCenter({
      lat: mapProps.center.lat,
      lng: mapProps.center.lng,
    })
    setZoom(mapProps.zoom)
    setType(MapTypes.TERRAIN)
  }
  const handleOnChange = (props: MapChangeProps) => {
    setZoom(props.zoom)
    setCenter(props.center)
  }
  const handleTypeChange = (newType: MapTypes) => {
    setType(newType)
  }
  const imgDivisor = 4

  return (
    <>
      <Head>
        <title>About the Ley Subdivision</title>
      </Head>
      <Grid container sx={commonStyles.pageContent}>
        <Grid item sx={styles.text} xs={12} md={6}>
          <Typography sx={styles.h1} variant="h1">
            <AboutIcon
              sx={{ ...styles.h1Icon, ...commonStyles.pageIcon } as any}
            />
            About the Subdivision
          </Typography>
          <Box sx={styles.p}>
            The Ley subdivision is located near the town of Westcliffe Colorado,
            between the Sangre De Cristo and Wet Mountain ranges, within the Wet
            Mountain Valley.
          </Box>
          <Box sx={styles.p}>
            The subdivision was created in 1971 and is one of a few
            neighborhoods on the West side of the valley floor. It covers
            roughly 150 acres, contains 41 lots and is bounded to the North by
            County Road 136 and County Road 137 to the West.
          </Box>
          <Box sx={styles.p}>
            It lies less than five miles from the Sangre De Cristo mountains and
            the town of Westcliffe and is only 1-2 hours from Colorado Springs,
            Salida, Cañon City, and Monarch Mountain Ski Area.
          </Box>
        </Grid>
        <Grid item sx={styles.imageContainer} md={6}>
          <a href="/images/photo2.jpg" target="_blank">
            <Image
              alt="Ley Subdivision Plat Map"
              fill
              priority
              src="/images/photo2.jpg"
              style={reactStyles.image}
            />
          </a>
        </Grid>
      </Grid>
      <Box sx={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={
            {
              key: process.env.GOOGLE_MAPS_API_KEY,
            } as GoogleMapReact.BootstrapURLKeys
          }
          center={center}
          onChange={handleOnChange}
          onGoogleApiLoaded={handleOnLoad}
          options={(maps: Maps) => ({
            fullscreenControl: false,
            mapTypeControl: false,
            mapTypeControlOptions: {
              style: maps.MapTypeControlStyle.DROPDOWN_MENU,
              position: maps.ControlPosition.TOP_LEFT,
              mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.TERRAIN,
              ],
            },
            mapTypeId: type,
          })}
          zoom={zoom}
        />
        <Button
          onClick={handleMapReset}
          sx={styles.resetButton}
          variant="contained"
        >
          Reset
        </Button>
        <ButtonGroup orientation="vertical" sx={styles.typeButtonGroup}>
          {Object.entries(MapTypes).map((buttonType) => (
            <Button
              key={buttonType[1]}
              onClick={() => handleTypeChange(buttonType[1])}
              sx={getTypeStyles(type, buttonType[1])}
              variant="contained"
            >
              {MapTypeText[buttonType[1]]}
            </Button>
          ))}
        </ButtonGroup>
        <Button
          sx={styles.directionsButton}
          href="https://goo.gl/maps/i1XpKZf4TFT6L9Zj7"
          target="directions"
          variant="contained"
        >
          Directions
        </Button>
      </Box>
    </>
  )
}
