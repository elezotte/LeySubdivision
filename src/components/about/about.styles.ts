import { SxProps } from '@mui/material'
import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

const googleButtonStyles: SxProps = {
  backgroundColor: colors.background,
  color: colors.gray.mediumDark,
  fontWeight: 500,
  fontSize: font.size.MD,
  textTransform: 'none',

  '&:hover': {
    color: colors.gray.dark,
    backgroundColor: colors.background,
  },
}

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
  typeButtonGroup: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  typeButton: googleButtonStyles,
  typeButtonSelected: {
    ...googleButtonStyles,
    backgroundColor: colors.gray.xlight,
    color: colors.gray.medium,
    '&:hover': {
      backgroundColor: colors.gray.xlight,
      color: colors.gray.medium,
    },
  },
  resetButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    ...googleButtonStyles,
  },
}
