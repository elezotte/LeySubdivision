import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  chartContainer: {
    height: 260,
    backgroundColor: colors.background,
    padding: 2,
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
    backgroundColor: colors.background,
    paddingX: {
      xs: 0,
      md: 2,
    },
    paddingY: {
      xs: 0,
      md: 1,
    },
    flexGrow: 1,
  },
  daysContainer: {
    fontSize: font.size.ML,
    fontWeight: font.weight.SEMIBOLD,
    display: 'flex',
    textAlign: 'center',
    gap: 1,
    marginTop: 1,
    cursor: 'pointer',
  },
  selectedDayContainer: {
    position: 'relative',
    color: colors.warning.medium,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: 20,
      bottom: -20,
      backgroundColor: colors.background,
    }
  },
  dayIcon: {
    fontSize: 30,
  },
  dayTemps: {
    fontSize: font.size.MD,
  },
  dayText: {
    fontSize: {
      xs: font.size.MS,
      md: font.size.MD,
    },
  },
  daySummary: {
    backgroundColor: colors.background,
    padding: 2,
    marginTop: 1,
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
    color: colors.gray.medium,
    fontSize: font.size.MD,
    marginBottom: 0.5,
    display: 'flex',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 0.5,
  },
  topInfo: {
    backgroundColor: colors.background,
    padding: 2,
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
    marginBottom: 2,
  },
  weatherContainer: {
    // borderTop: `8px solid ${colors.gray.mediumLight}`,
  },
}
