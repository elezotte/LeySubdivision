import { colors, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  map: {
    height: 300,
    borderTop: `1px solid ${colors.gray.xlight}`,
  },
  marker: {
    transform: 'translate(-50%, -100%)',
    color: colors.warning.medium,
  },
}
