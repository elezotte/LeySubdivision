import WeatherIcon from '@mui/icons-material/Thermostat'
import { Box, Link } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather'

const divisor = 5.5

export default function Home() {
  const [showWeather, setShowWeather] = useState(false)

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.OPEN_WEATHER_API_KEY,
    lat: '38.100690',
    lon: '-105.513390',
    lang: 'en',
    unit: 'imperial',
  })

  return (
    <>
      <Box
        sx={{
          marginTop: 30,
          textAlign: 'center',
        }}
      >
        <Image
          alt="ley logo"
          priority
          height={Math.round(500 / divisor)}
          width={Math.round(460 / divisor)}
          src="/logo.png"
        />
        <Box
          sx={{
            marginTop: 2,
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          LeySubdivision.com
        </Box>
        <Box sx={{ fontSize: 18 }}>Westcliffe, Colorado</Box>
        <Box
          sx={{
            marginTop: 3,
            fontSize: 18,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box style={{ width: 500 }}>
            <Link
              sx={{
                display: 'flex',
                cursor: 'pointer',
                color: '#fff',
                marginBottom: 1,
                justifyContent: 'center',
              }}
              underline="none"
              onClick={() => setShowWeather(!showWeather)}
            >
              <WeatherIcon />
              {showWeather ? 'Hide' : 'View'} Weather
            </Link>
            <Box sx={{ opacity: showWeather ? 100 : 0 }}>
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                unitsLabels={{ temperature: 'F', windSpeed: 'MPH' }}
                showForecast
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Image
          alt="ley subdivision"
          priority
          fill
          src="/images/bg1.jpg"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}
