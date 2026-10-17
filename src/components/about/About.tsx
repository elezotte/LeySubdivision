import AboutIcon from '@mui/icons-material/LandscapeOutlined'
import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { commonStyles } from 'components/common.styles'
import GoogleMapReact, { Maps } from 'google-map-react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { reactStyles, styles } from './about.styles'
import { MapChangeProps, MapTypeText, MapTypes, mapProps } from './map.config'
// import blur1 from './blur/photo1.blur'
// import blur2 from './blur/photo2.blur'
// import blur3 from './blur/photo3.blur'
// import blur4 from './blur/photo4.blur'
// import blur5 from './blur/photo5.blur'
// import blur6 from './blur/photo6.blur'
// import blur7 from './blur/photo7.blur'

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

const photos = [
  {
    alt: 'Rainbow in the Ley Subdivision',
    src: '/images/photo1.jpg',
    // blur: blur1
  },
  {
    alt: 'Moody clouds over the Ley Subdivision',
    src: '/images/photo2.jpg',
    // blur: blur2
  },
  {
    alt: 'Arial of the Wet Mountain Valley',
    src: '/images/photo3.jpg',
    // blur: blur3
  },
  {
    alt: 'Mountain view from the Ley Subdivision',
    src: '/images/photo4.jpg',
    // blur: blur4
  },
  {
    alt: 'Mountain view coming into Westcliffe',
    src: '/images/photo5.jpg',
    // blur: blur5
  },
  {
    alt: 'Horn Peak from the Ley Subdivision',
    src: '/images/photo6.jpg',
    // blur: blur6
  },
  {
    alt: 'Arial of the Ley Subdivision and Sangre De Cristo mountains',
    src: '/images/photo7.jpg',
    // blur: blur7
  },
  {
    alt: 'Nighthawk way in the Ley Subdivision',
    src: '/images/photo8.jpg',
    // blur: blur8
  },
  {
    alt: 'A beautiful sunset in the Ley Subdivision',
    src: '/images/photo9.jpg',
    // blur: blur9
  },
  {
    alt: 'A scenic sunset in the Ley Subdivision',
    src: '/images/photo10.jpg',
    // blur: blur10
  },
  {
    alt: 'A clear sunrise in the Ley Subdivision',
    src: '/images/photo11.jpg',
    // blur: blur11
  },
  {
    alt: 'A rainbow over the Sangre De Cristo mountains',
    src: '/images/photo12.jpg',
    // blur: blur12
  },
  {
    alt: 'Crisp morning light on the Sangre De Cristo mountains',
    src: '/images/photo13.jpg',
    // blur: blur13
  },
  {
    alt: 'Colorful morning clouds',
    src: '/images/photo14.jpg',
    // blur: blur14
  },
  {
    alt: 'Clouds and mountains',
    src: '/images/photo15.jpg',
    // blur: blur15
  },
  {
    alt: 'A full rainbow over 136',
    src: '/images/photo16.jpg',
    // blur: blur16
  },
  {
    alt: 'Clouds clearing after the storm',
    src: '/images/photo17.jpg',
    // blur: blur17
  },
]

const getPhotoIndex = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min) + min)

const About = (): React.ReactNode => {
  const [center, setCenter] = useState(mapProps.center)
  const [type, setType] = useState(MapTypes.TERRAIN)
  const [zoom, setZoom] = useState(mapProps.zoom)
  const [photoIndex] = useState(getPhotoIndex(0, photos.length - 1))

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

  return (
    <>
      <Head>
        <title>About the Ley Subdivision</title>
      </Head>
      <Grid container sx={commonStyles.pageContentFull}>
        <Grid sx={styles.imageContainer} size={{ md: 12, xs: 12 }}>
          <Grid sx={styles.text} size={{ md: 6, xs: 12 }}>
            <Typography sx={styles.h1} variant="h1">
              <AboutIcon
                sx={{ ...styles.h1Icon, ...commonStyles.pageIcon } as any}
              />
              About the Subdivision
            </Typography>
            <Box sx={styles.p}>
              The Ley subdivision is located near the town of Westcliffe
              Colorado, between the Sangre De Cristo and Wet Mountain ranges,
              within the Wet Mountain Valley.
            </Box>
            <Box sx={styles.p}>
              The subdivision was created in 1971 and is one of a few
              neighborhoods on the West side of the valley floor. It covers
              roughly 150 acres, contains 41 lots and is bounded to the North by
              County Road 136 and County Road 137 to the West.
            </Box>
            <Box sx={styles.p}>
              It lies less than five miles from the Sangre De Cristo mountains
              and the town of Westcliffe and is only 1-2 hours from Colorado
              Springs, Salida, Cañon City, and Monarch Mountain Ski Area.
            </Box>
          </Grid>
          <a href={photos[photoIndex].src} title="view photo" target="_blank">
            <Image
              alt={photos[photoIndex].alt}
              // blurDataURL={photos[photoIndex].blur}
              fill
              // placeholder="blur"
              priority
              src={photos[photoIndex].src}
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
            yesIWantToUseGoogleMapApiInternals: true,
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

export default About
