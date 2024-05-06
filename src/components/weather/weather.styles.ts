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
    fontSize: font.size.LG,
    fontWeight: font.weight.BOLD,
  },
  currentWeatherItem: {
    fontSize: font.size.MD,
    fontWeight: font.weight.REGULAR,
    marginLeft: {
      xs: 0,
      md: 2,
    },
  },
  currentWeather: {
    display: {
      xs: 'block',
      md: 'flex',
    },
    alignItems: 'center',
  },
  dayContainer: {
    borderColor: colors.gray.light,
    borderWidth: {
      xs: 0,
      md: 1,
    },
    borderStyle: 'solid',
    paddingX: {
      xs: 0,
      md: 2,
    },
    paddingY: {
      xs: 0,
      md: 1,
    },
    borderRadius: 2,
  },
  daysContainer: {
    fontSize: font.size.ML,
    fontWeight: font.weight.SEMIBOLD,
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  dayIcon: {
    fontSize: 30,
  },
  dayTemps: {
    fontSize: font.size.MS,
  },
  dayText: {
    fontSize: {
      xs: font.size.MD,
      md: font.size.ML,
    },
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
  info: {
    color: colors.gray.mediumLight,
    fontSize: font.size.MS,
    marginBottom: 1,
    display: 'flex',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 0.25,
  },
  weatherAlert: {
    boxShadow: 'none',
    backgroundColor: colors.warning.xlight,
  },
  weatherAlertSummary: {
    color: colors.warning.dark,
    fontSize: font.size.MD,
    fontWeight: font.weight.SEMIBOLD,
    border: 'none',
  },
  weatherAlertIcon: {
    fill: colors.warning.dark,
    fontSize: font.size.LG,
    marginRight: 1
  },
  weatherAlertExpandIcon: {
    color: colors.warning.dark,
  },
  weatherAlertDetails: {
    color: colors.warning.dark,
    fontSize: font.size.MD,
    paddingLeft: 6,
    paddingTop: 0,
  },
  weatherAlertsContainer: {
    marginBottom: 4,
  },
  weatherContainer: {
    maxWidth: 840,
  },
}
