import { Button, ButtonGroup, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import { colors, font } from 'components/theme/themeSettings'
import GoogleMapReact, { Maps } from 'google-map-react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { styles } from './about.styles'
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
        <Grid
          item
          sx={{
            fontSize: font.size.ML,
            backgroundColor: colors.gray.light,
            color: colors.gray.dark,
            paddingX: 6,
            paddingY: 3,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
          xs={12}
          md={6}
        >
          <p>
            The Ley subdivision was created in 1971 and is one of a few
            neighborhoods on the West side of the Wet Mountain Valley floor.
          </p>
          <p>
            It covers roughly 136 acres and contains 41 lots. It is bounded to
            the North by County Road 136 and County Road 137 to the West.
          </p>
          <p>
            It lies less than five miles from the Sangre De Cristo mountains and
            the town of Westcliffe and is only 1-2 hours from Colorado Springs,
            Salida, Canon City, and Pueblo.
          </p>
        </Grid>
        <Grid
          item
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
          display={{ xs: 'none', md: 'block' }}
          md={6}
        >
          <a href="/images/photo2.jpg" target="_blank">
            <Image
              alt="Ley Subdivision Plat Map"
              fill
              priority
              src="/images/photo2.jpg"
              style={{
                objectFit: 'cover',
                border: `4px solid ${colors.gray.light}`,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
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
