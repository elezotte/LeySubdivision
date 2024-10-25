import { SxProps } from '@mui/material'
import {
  colors,
  font,
  MuiSxStyles,
  ReactStyles,
} from 'components/theme/themeSettings'

const googleButtonStyles: SxProps = {
  backgroundColor: colors.gray.xxlight,
  color: colors.gray.mediumDark,
  fontWeight: 400,
  fontSize: font.size.MD,
  textTransform: 'none',
  border: `1px solid ${colors.gray.light}`,
  paddingX: 0,
  paddingY: 0.3,
  width: 90,

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
    objectPosition: '50% 60%',
  },
}

export const styles: MuiSxStyles = {
  directionsButton: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    ...googleButtonStyles,
  },
  h1: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: {
      xs: 1,
      md: 'inherit',
    },
  },
  h1Icon: {
    fontSize: '36px !important',
  },
  imageContainer: {
    fontSize: font.size.ML,
    position: 'relative',
    overflow: 'hidden',
  },
  map: {
    height: 300,
    position: 'relative',
  },
  marker: {
    transform: 'translate(-50%, -100%)',
    color: colors.alert.medium,
  },
  p: {
    marginBottom: {
      xs: 0,
      md: 2,
    },
    marginTop: {
      xs: 1,
      md: 2,
    },
  },
  resetButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    ...googleButtonStyles,
  },
  text: {
    paddingRight: 2,
    paddingBottom: 1,
    zIndex: 1,
    padding: 4.5,
    color: colors.gray.xlight,
    height: '100%',
    backgroundColor: `${colors.gray.dark}88`,
    textShadow: `1px 1px 0 ${colors.gray.dark}`,
    position: 'relative',

    '> h1': {
      paddingBottom: 0,
      color: colors.gray.xlight,
    },
  },
  textContainer: {
    fontSize: font.size.ML,
    fontFamily: font.family.logo,
    color: colors.gray.dark,
    paddingRight: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',

    '@media (max-width:500px)': {
      fontSize: font.size.MD,
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
    backgroundColor: colors.gray.light,
    color: colors.gray.medium,

    '&:hover': {
      backgroundColor: colors.gray.xlight,
      color: colors.gray.medium,
    },
  },
}
