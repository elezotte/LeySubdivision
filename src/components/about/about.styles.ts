import { colors, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  map: {
    height: 300,
    borderTop: `1px solid ${colors.gray.xlight}`,
    position: 'relative',
  },
  marker: {
    transform: 'translate(-50%, -100%)',
    color: colors.warning.medium,
  },
  resetButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.background,
    color: '#666',
    fontWeight: 700,
    textTransform: 'none',

    '&:hover': {
      color: colors.gray.dark,
      backgroundColor: colors.background,
    },
  },
}
