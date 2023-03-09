import WeatherIcon from '@mui/icons-material/WbSunnyOutlined'
import { LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { commonStyles } from 'components/common.styles'
import Head from 'next/head'
import ReactWeather, { useOpenWeather } from 'react-open-weather'
import { styles } from './weather.styles'

const Weather: React.FC = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.OPEN_WEATHER_API_KEY,
    lat: parseFloat(process.env.GOOGLE_MAPS_LAT as string),
    lon: parseFloat(process.env.GOOGLE_MAPS_LON as string),
    lang: 'en',
    unit: 'imperial',
  })

  return (
    <Box sx={commonStyles.pageContent}>
      <Head>
        <title>Ley Subdivision Weather</title>
      </Head>
      <Typography variant="h1">
        <WeatherIcon sx={commonStyles.pageIcon} />
        Area Weather
      </Typography>
      {isLoading && <LinearProgress />}
      <Box sx={styles.container}>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          showForecast
          unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
        />
      </Box>
    </Box>
  )
}

export default Weather
