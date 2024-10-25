import InfoIcon from '@mui/icons-material/InfoOutlined'
import PageIcon from '@mui/icons-material/WbSunnyOutlined'
import AlertIcon from '@mui/icons-material/WarningAmber'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { commonStyles } from 'components/common.styles'
import ExpandIcon from '@mui/icons-material/ExpandMore'
import { colors } from 'components/theme/themeSettings'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
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
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({})
  const [loadingData, setLoadingData] = useState(true)
  const [todayText, setTodayText] = useState('')
  const [weatherAlerts, setWeatherAlerts] = useState<OWAlert[]>([])
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null)
  const [selectedDaySummary, setSelectedDaySummary] = useState<string>('')

  const getWeather = useCallback(async () => {
    await fetch('/api/weather', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        const dayData: DayData[] = []
        const dayLabels: string[] = []
        const days: string[] = []
        const hourLabels: string[] = []
        const hourlyTemps: number[] = []
        const iconIds: number[] = []
        const temps: object[] = []

        const today = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
        }).format()
        const maxPrecip = Math.max(
          ...res.minutely.map((minute: any) => minute.precipitation)
        )

        setTodayText(`Today, ${today}`)
        setCurrentWeather({
          description: res.current.weather[0].description,
          feels_like: `${Math.round(res.current.feels_like)}°`,
          humidity: `${Math.round(res.current.humidity)}%`,
          precipitation: `${Math.round(maxPrecip)}%`,
          temp: `${Math.round(res.current.temp)}°F`,
          wind_speed: `${Math.round(res.current.wind_speed)}mph`,
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
            high: `${Math.round(day.temp.max)}°`,
            low: `${Math.round(day.temp.min)}°`,
            temp: `${Math.round(day.temp.day)}°`,
          })

          dayData.push({
            day: formatDay(day.dt),
            iconId: day.weather[0].id,
            summary: day.summary,
            temps: {
              high: `${Math.round(day.temp.max)}°`,
              low: `${Math.round(day.temp.min)}°`,
              temp: `${Math.round(day.temp.day)}°`,
            },
          })
        })

        setChartDayData(dayData)

        setChartData({
          labels: hourLabels,
          datasets: [
            {
              backgroundColor: colors.warning.medium,
              borderColor: colors.warning.medium,
              cubicInterpolationMode: 'monotone',
              data: hourlyTemps,
              label: 'Temp',
            },
          ],
        })

        setLoadingData(false)
      })
  }, []);

  const handleDaySelection = (index: number, summary: string) => {
    const sameDay = selectedDayIndex === index
    setSelectedDayIndex(sameDay ? null : index)
    setSelectedDaySummary(sameDay ? '' : summary)
  }

  const getDayStyles = (index: number): any => {
    if (selectedDayIndex === index) {
      return {
        ...styles.dayContainer,
        ...styles.selectedDayContainer,
      }
    }
    return styles.dayContainer
  }

  useEffect(() => {
    getWeather()
  }, [getWeather])

  useEffect(() => {
    chartDayData[0] && handleDaySelection(0, chartDayData[0].summary)
  }, [chartDayData]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={commonStyles.pageContent}>
      <Head>
        <title>Ley Subdivision Weather</title>
      </Head>
      <Typography variant="h1">
        <PageIcon fontSize="inherit" sx={styles.infoIcon} />
        Area Weather
      </Typography>
      {loadingData && <LinearProgress />}
      <Box sx={styles.weatherContainer}>
        {!loadingData && (
          <>
            {weatherAlerts?.length && (
              <Box sx={styles.weatherAlertsContainer}>
                {weatherAlerts.map((alert) => (
                  <Accordion key={alert.description} sx={styles.weatherAlert}>
                    <AccordionSummary sx={styles.weatherAlertSummary} expandIcon={<ExpandIcon sx={styles.weatherAlertExpandIcon} />}>
                      <AlertIcon sx={styles.weatherAlertIcon} /> {alert.event}
                    </AccordionSummary>
                    <AccordionDetails sx={styles.weatherAlertDetails} dangerouslySetInnerHTML={{ __html: alert.description.replaceAll('\n*', '<br />*') }}></AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}
            <Box sx={styles.topInfo}>
              <Box sx={styles.hourlyTitle}>{todayText}</Box>
              <Box sx={styles.currentWeather}>
                <Box sx={styles.currentTemp}>{currentWeather.temp}</Box>
                <Box sx={styles.currentWeatherItem}>
                  {currentWeather.description}
                </Box>
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
              <Box sx={styles.info}>
                <InfoIcon fontSize="inherit" sx={styles.infoIcon} />
                Hover time or select day for more information
              </Box>
            </Box>
            <Box sx={styles.chartContainer}>
              <Line options={chartOptions} data={chartData} />
            </Box>
            <Box sx={styles.daysContainer}>
              {chartDayData.map((day, index: number) => (
                <Box key={index} sx={getDayStyles(index)} onClick={() => handleDaySelection(index, day.summary)}>
                  <Box sx={styles.dayText}>{day.day}</Box>
                  <Box>
                    <WeatherIcon wid={day.iconId} />
                  </Box>
                  <Box sx={styles.dayTemps}>
                    {day.temps.high}
                    <Box sx={styles.dayLowTemp}>/{day.temps.low}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
            {selectedDaySummary && (
              <Box sx={styles.daySummary}>
                {selectedDaySummary}
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  )
}

export default Weather
