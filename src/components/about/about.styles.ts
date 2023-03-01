import { SxProps } from '@mui/material'
import {
  colors,
  font,
  MuiSxStyles,
  ReactStyles,
} from 'components/theme/themeSettings'

const googleButtonStyles: SxProps = {
  backgroundColor: colors.background,
  color: colors.gray.mediumDark,
  fontWeight: 500,
  fontSize: font.size.MD,
  textTransform: 'none',
  border: `1px solid ${colors.gray.light}`,
  paddingX: 0,
  paddingY: 0.5,
  width: 87,

  '&:hover': {
    color: colors.gray.dark,
    backgroundColor: colors.background,
  },
  '@media (max-width:500px)': {
    fontSize: font.size.MS,
    paddingY: 0.1,
    width: 64,
  },
}

export const reactStyles: ReactStyles = {
  image: {
    objectFit: 'cover',
    border: `4px solid ${colors.gray.light}`,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
}

export const styles: MuiSxStyles = {
  directionsButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    ...googleButtonStyles,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    display: {
      xs: 'none',
      md: 'block',
    },
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
  text: {
    fontSize: font.size.ML,
    backgroundColor: colors.gray.light,
    color: colors.gray.dark,
    paddingX: 6,
    paddingY: 3,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: {
      xs: 6,
      md: 0,
    },
    borderBottomRightRadius: {
      xs: 6,
      md: 0,
    },

    '@media (max-width:500px)': {
      fontSize: font.size.MD,
      paddingX: 3,
      paddingY: 2,
    },
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
