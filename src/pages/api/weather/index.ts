import { NextApiRequest, NextApiResponse } from 'next'

const getWeather = async (req: NextApiRequest, res: NextApiResponse) => {
  const weatherUrl = `http://api.openweathermap.org/data/2.5/onecall?appid=${process.env.OPEN_WEATHER_API_KEY}&lang=en&units=imperial&lat=${process.env.GOOGLE_MAPS_LAT}&lon=${process.env.GOOGLE_MAPS_LON}`

  await fetch(weatherUrl, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      return res.json(data)
    })
}

export default getWeather
