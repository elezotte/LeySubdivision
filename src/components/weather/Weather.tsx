import { Alert, Box, LinearProgress, Typography } from '@mui/material'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { commonStyles } from 'components/common.styles'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { styles } from './weather.styles'

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import {
  chartOptions,
  CurrentWeather,
  DayData,
  formatDate,
  formatDay,
  formatTime,
  OWAlert,
  OWDay,
  OWHour,
} from './weather.config'
import WeatherIcon from './WeatherIcon'

ChartJS.register(
  CategoryScale,
  ChartDataLabels,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
)

const Weather: React.FC = () => {
  const [chartData, setChartData] = useState<any>({})
  const [chartDayData, setChartDayData] = useState<DayData[]>([])
  const [loadingData, setLoadingData] = useState(true)
  const [todayText, setTodayText] = useState('')
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({})
  const [weatherAlerts, setWeatherAlerts] = useState<OWAlert[]>([])

  const getWeather = async () => {
    await fetch('/api/weather', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
        const dayLabels: string[] = []
        const hourLabels: string[] = []
        const days: string[] = []
        const hourlyTemps: number[] = []
        const temps: object[] = []
        const iconIds: number[] = []
        const dayData: DayData[] = []
        const today = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
        }).format()

        const maxPrecip = Math.max(
          ...res.minutely.map((minute: any) => minute.precipitation)
        )

        setTodayText(`Today, ${today}`)
        setCurrentWeather({
          temp: `${Math.round(res.current.temp)}°F`,
          feels_like: `${Math.round(res.current.feels_like)}°`,
          humidity: `${Math.round(res.current.humidity)}%`,
          wind_speed: `${Math.round(res.current.wind_speed)}mph`,
          precipitation: `${Math.round(maxPrecip)}%`,
        })
        setWeatherAlerts(res.alerts)

        res.hourly.forEach((hour: OWHour) => {
          hourLabels.push(formatTime(hour.dt))
          hourlyTemps.push(Math.round(hour.temp))
        })

        res.daily.forEach((day: OWDay) => {
          dayLabels.push(formatDate(day.dt))
          days.push(formatDay(day.dt))
          iconIds.push(day.weather[0].id)
          temps.push({
            temp: `${Math.round(day.temp.day)}°`,
            low: `${Math.round(day.temp.min)}°`,
            high: `${Math.round(day.temp.max)}°`,
          })

          dayData.push({
            day: formatDay(day.dt),
            temps: {
              temp: `${Math.round(day.temp.day)}°`,
              low: `${Math.round(day.temp.min)}°`,
              high: `${Math.round(day.temp.max)}°`,
            },
            iconId: day.weather[0].id,
          })
        })

        setChartDayData(dayData)

        setChartData({
          labels: hourLabels,
          datasets: [
            {
              label: 'Temp',
              data: hourlyTemps,
              borderColor: '#fbbd05',
              backgroundColor: '#fbbd05',
              cubicInterpolationMode: 'monotone',
            },
          ],
        })

        setLoadingData(false)
      })
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <Box sx={commonStyles.pageContent}>
      <Head>
        <title>Ley Subdivision Weather</title>
      </Head>
      <Typography variant="h1">Area Weather</Typography>
      {loadingData && <LinearProgress />}
      <Box sx={styles.weatherContainer}>
        {!loadingData && (
          <>
            {weatherAlerts?.length && (
              <Box sx={styles.weatherAlertContainer}>
                {weatherAlerts.map((alert) => (
                  <Alert
                    severity="warning"
                    key={alert.description}
                    sx={styles.weatherAlert}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: alert.description.replaceAll('\n*', '<br />*'),
                      }}
                    />
                  </Alert>
                ))}
              </Box>
            )}
            <Box sx={styles.hourlyTitle}>{todayText}</Box>
            <Box sx={styles.currentWeather}>
              <Box sx={styles.currentTemp}>{currentWeather.temp}</Box>
              <Box sx={styles.currentWeatherItem}>
                feels like: {currentWeather.feels_like}
              </Box>
              <Box sx={styles.currentWeatherItem}>
                wind: {currentWeather.wind_speed}
              </Box>
              <Box sx={styles.currentWeatherItem}>
                humidity: {currentWeather.humidity}
              </Box>
              <Box sx={styles.currentWeatherItem}>
                precipitation: {currentWeather.precipitation}
              </Box>
            </Box>
            <Box sx={styles.chartContainer}>
              <Line options={chartOptions} data={chartData} />
            </Box>
            <Box sx={styles.daysContainer}>
              {chartDayData.map((day, index: number) => (
                <Box key={index} sx={styles.dayContainer}>
                  <Box sx={styles.dayText}>{day.day}</Box>
                  <Box>
                    <WeatherIcon wid={day.iconId} />
                  </Box>
                  <Box sx={styles.dayTemps}>
                    <Box sx={styles.dayLowTemp}>{day.temps.low}/</Box>
                    {day.temps.high}
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default Weather
