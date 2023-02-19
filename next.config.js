/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    GOOGLE_MAPS_LAT: process.env.GOOGLE_MAPS_LAT,
    GOOGLE_MAPS_LON: process.env.GOOGLE_MAPS_LON,
  },
}

module.exports = nextConfig
