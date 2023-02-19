import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import { commonStyles } from 'components/common.styles'
import ReactWeather, { useOpenWeather } from 'react-open-weather'

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
      {isLoading && <LinearProgress />}
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        showForecast
      />
    </Box>
  )
}

export default Weather
