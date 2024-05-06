import { font } from 'components/theme/themeSettings'

export interface CurrentWeather {
  description?: string
  feels_like?: string
  humidity?: string
  precipitation?: string
  temp?: string
  wind_speed?: string
}
export interface DayData {
  day: string
  iconId: number
  summary: string
  temps: {
    temp: string
    low: string
    high: string
  }
}
export interface OWWeather {
  id: number
  main: string
  description: string
}
export interface OWDay {
  dt: number
  summary: string
  temp: {
    day: number
    min: number
    max: number
  }
  weather: OWWeather[]
}
export interface OWHour {
  dt: number
  temp: number
}
export interface OWAlert {
  event: string
  description: string
}

export const formatDate = (unixTimestamp: number): string => {
  const dateObj = new Date(unixTimestamp * 1000)

  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`
}
export const formatDay = (unixTimestamp: number): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dateObj = new Date(unixTimestamp * 1000)

  return days[dateObj.getDay()]
}
export const formatTime = (unixTimestamp: number): string => {
  const dateObj = new Date(unixTimestamp * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
  })

  return dateObj
}

export const chartOptions: any = {
  animation: false,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
      },
      ticks: {
        maxTicksLimit: 8,
        font: {
          size: font.size.MS,
          family: font.family.body,
        },
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        callback: (value: string) => `${value}°`,
        maxTicksLimit: 4,
        font: {
          size: font.size.MS,
          family: font.family.body,
        },
      },
    },
  },
  plugins: {
    datalabels: {
      align: 'end',
      anchor: 'end',
      display: (context: any) => context.dataIndex % 6 === 0,
      formatter: (value: any) => `${value}°`,
    },
    tooltip: {
      callbacks: {
        label: (item: { formattedValue: string }) => ` ${item.formattedValue}°`,
      },
    },
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      borderWidth: 0,
      radius: 3,
    },
    line: { borderWidth: 2 },
  },
}
