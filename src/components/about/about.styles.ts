import { SxProps } from '@mui/material'
import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

const googleButtonStyles: SxProps = {
  backgroundColor: colors.background,
  // boxShadow: `1px 1px 1px 0px ${colors.gray.mediumLight}`,
  color: colors.gray.mediumDark,
  fontWeight: 500,
  fontSize: font.size.MD,
  textTransform: 'none',
  border: `1px solid ${colors.gray.light}`,
  paddingX: 1,
  paddingY: 0.5,

  '&:hover': {
    color: colors.gray.dark,
    backgroundColor: colors.background,
  },
}

export const styles: MuiSxStyles = {
  directionsButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    ...googleButtonStyles,
  },
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
  typeButton: {
    ...googleButtonStyles,
    width: 87,
  },
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
