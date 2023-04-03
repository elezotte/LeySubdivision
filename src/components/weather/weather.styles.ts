import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  chartContainer: {
    height: 200,
    marginTop: 2,
    marginBottom: 2,
  },
  container: {
    maxWidth: 680,
  },
  currentTemp: {
    display: 'inline-block',
    fontSize: font.size.ML,
    fontWeight: font.weight.BOLD,
  },
  currentWeatherItem: {
    display: 'inline-block',
    fontSize: font.size.MS,
    fontWeight: font.weight.LIGHT,
    marginLeft: 2,
  },
  currentWeather: {
    display: 'flex',
    alignItems: 'center',
  },
  daysContainer: {
    fontSize: font.size.ML,
    fontWeight: font.weight.SEMIBOLD,
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  dayTemps: {
    fontSize: font.size.MS,
  },
  dayText: {
    fontSize: font.size.ML,
  },
  dayLowTemp: {
    display: {
      xs: 'none',
      md: 'inline-block',
    },
  },
  hourlyTitle: {
    fontSize: font.size.ML,
    fontWeight: font.weight.SEMIBOLD,
  },
  weatherAlert: {
    display: 'flex',
    fontSize: font.size.MS,
    padding: 2,
    marginBottom: 1,
    color: colors.warning.dark,
    backgroundColor: colors.warning.light,
  },
  weatherAlertContainer: {
    marginBottom: 3,
  },
  weatherAlertIcon: {
    marginRight: 2,
  },
}
