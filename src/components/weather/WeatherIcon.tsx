import {
  WiCloudy,
  WiDayCloudy,
  WiDayHaze,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDust,
  WiFog,
  WiRain,
  WiSandstorm,
  WiSmoke,
  WiSnow,
  WiSprinkle,
  WiThunderstorm,
  WiTornado,
  WiVolcano,
  WiWindy,
} from 'react-icons/wi'

interface WeatherIconProps {
  wid: number
}

const size = 40

const WeatherIcon: React.FC<WeatherIconProps> = ({ wid }: WeatherIconProps) => {
  const weatherIconMap: {
    [key: number]: React.ReactElement
  } = {
    200: <WiThunderstorm size={size} />,
    201: <WiThunderstorm size={size} />,
    202: <WiThunderstorm size={size} />,
    210: <WiThunderstorm size={size} />,
    211: <WiThunderstorm size={size} />,
    212: <WiThunderstorm size={size} />,
    221: <WiThunderstorm size={size} />,
    230: <WiThunderstorm size={size} />,
    231: <WiThunderstorm size={size} />,
    232: <WiThunderstorm size={size} />,
    300: <WiSprinkle size={size} />,
    301: <WiSprinkle size={size} />,
    302: <WiSprinkle size={size} />,
    310: <WiSprinkle size={size} />,
    311: <WiSprinkle size={size} />,
    312: <WiSprinkle size={size} />,
    313: <WiSprinkle size={size} />,
    314: <WiSprinkle size={size} />,
    321: <WiSprinkle size={size} />,
    500: <WiRain size={size} />,
    501: <WiRain size={size} />,
    502: <WiRain size={size} />,
    503: <WiRain size={size} />,
    504: <WiRain size={size} />,
    511: <WiRain size={size} />,
    520: <WiRain size={size} />,
    521: <WiRain size={size} />,
    522: <WiRain size={size} />,
    531: <WiRain size={size} />,
    600: <WiSnow size={size} />,
    601: <WiSnow size={size} />,
    602: <WiSnow size={size} />,
    611: <WiSnow size={size} />,
    612: <WiSnow size={size} />,
    613: <WiSnow size={size} />,
    615: <WiSnow size={size} />,
    616: <WiSnow size={size} />,
    620: <WiSnow size={size} />,
    621: <WiSnow size={size} />,
    622: <WiSnow size={size} />,
    701: <WiSprinkle size={size} />,
    711: <WiSmoke size={size} />,
    721: <WiDayHaze size={size} />,
    731: <WiDust size={size} />,
    741: <WiFog />,
    751: <WiSandstorm size={size} />,
    761: <WiDust size={size} />,
    762: <WiVolcano size={size} />,
    771: <WiWindy size={size} />,
    781: <WiTornado size={size} />,
    800: <WiDaySunny size={size} />,
    801: <WiDaySunnyOvercast size={size} />,
    802: <WiDaySunnyOvercast size={size} />,
    803: <WiDayCloudy size={size} />,
    804: <WiCloudy size={size} />,
  }

  return weatherIconMap[wid]
}

export default WeatherIcon
