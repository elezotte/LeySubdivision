import { font } from 'components/theme/themeSettings'

export interface CurrentWeather {
  temp?: string
}
export interface DayData {
  day: string
  temps: {
    temp: string
    low: string
    high: string
  }
  iconId: number
}
export interface OWWeather {
  id: number
  main: string
  description: string
}
export interface OWDay {
  dt: number
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
  feels_like: number
}
export interface OWAlert {
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
      display: true,
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
    tooltip: {
      callbacks: {
        label: (item: { formattedValue: string }) => ` ${item.formattedValue}°`,
      },
    },
    legend: {
      align: 'end',
      display: true,
      labels: {
        boxWidth: 13,
        font: {
          size: font.size.MS,
          family: font.family.body,
          weight: 'bold',
        },
      },
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
