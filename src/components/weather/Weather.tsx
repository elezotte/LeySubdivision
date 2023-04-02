import { LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
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
import { colors } from 'components/theme/themeSettings'
import { Line } from 'react-chartjs-2'
import {
  chartOptions,
  DayData,
  formatDate,
  formatDay,
  formatTime,
  OWDay,
  OWHour,
} from './weather.config'
import WeatherIcon from './WeatherIcon'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Weather: React.FC = () => {
  const [chartData, setChartData] = useState<any>({})
  const [chartDayData, setChartDayData] = useState<DayData[]>([])
  const [loadingData, setLoadingData] = useState(true)

  const getWeather = async () => {
    await fetch('/api/weather', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        const dayLabels: string[] = []
        const hourLabels: string[] = []
        const days: string[] = []
        const hourlyTemps: number[] = []
        const hourlyFeelTemps: number[] = []
        const temps: object[] = []
        const iconIds: number[] = []
        const dayData: DayData[] = []

        res.hourly.forEach((hour: OWHour) => {
          hourLabels.push(formatTime(hour.dt))
          hourlyTemps.push(Math.round(hour.temp))
          hourlyFeelTemps.push(Math.round(hour.feels_like))
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
            {
              label: 'Feel',
              data: hourlyFeelTemps,
              borderColor: colors.gray.mediumLight,
              backgroundColor: colors.gray.mediumLight,
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
      <Box>
        {!loadingData && (
          <>
            <Box sx={styles.hourlyTitle}>Today</Box>
            <Box sx={styles.chartContainer}>
              <Line options={chartOptions} data={chartData} />
            </Box>
            <Box sx={styles.daysContainer}>
              {chartDayData.map((day, index: number) => (
                <Box key={index}>
                  <Box sx={styles.dayText}>{day.day}</Box>
                  <Box>
                    <WeatherIcon wid={day.iconId} />
                  </Box>
                  <Box sx={styles.dayTemps}>
                    <Box sx={styles.dayLowTemp}>{day.temps.low}-</Box>
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
