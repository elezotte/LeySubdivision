/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    GOOGLE_MAPS_LAT: process.env.GOOGLE_MAPS_LAT,
    GOOGLE_MAPS_LON: process.env.GOOGLE_MAPS_LON,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_TARGET: process.env.EMAIL_TARGET,
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
  },
}

module.exports = nextConfig
