import { SxProps } from '@mui/material'
import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

const commonButtonItemStyles: SxProps = {
  fontFamily: font.family.logo,
  fontWeight: font.weight.BOLD,
  borderRadius: 0,
  fontSize: font.size.ML,
  paddingY: 0,
  paddingX: 2,
  marginX: 0,
  marginTop: 0,
  marginBottom: '-2px',
  textDecoration: 'none',
  textTransform: 'none',
  lineHeight: 1,
  minHeight: 50,
  color: colors.gray.light,
}

const commonMenuItemStyles: SxProps = {
  fontFamily: font.family.body,
  fontWeight: 400,
  fontSize: font.size.ML,
  color: colors.gray.medium,
}

export const styles: MuiSxStyles = {
  appBar: {
    paddingX: 3,
    backgroundColor: colors.gray.medium,
    boxShadow: 'none',
    display: 'flex',
    borderBottom: `3px solid ${colors.gray.dark}`,
  },
  buttonContainer: {
    flexGrow: 1,
    display: {
      xs: 'none',
      md: 'flex',
    },
  },
  leyText: {
    fontFamily: font.family.logo,
    marginLeft: 1,
    fontSize: font.size.LG,
    fontWeight: 700,
    color: colors.gray.dark,
  },
  logo: {
    display: 'flex',
  },
  logoContainerButtons: {
    cursor: 'pointer',
    display: {
      xs: 'none',
      md: 'flex',
    },
    marginRight: 6,
    marginLeft: 1,
  },
  logoContainerMenu: {
    display: {
      xs: 'flex',
      md: 'none',
    },
    marginRight: 1,
  },
  logoIcon: {
    marginTop: '4px',
  },
  menu: {
    display: {
      xs: 'block',
      md: 'none',
    },
  },
  menuContainer: {
    flexGrow: 1,
    display: {
      xs: 'flex',
      md: 'none',
    },
  },
  menuIcon: {
    color: colors.gray.dark,
  },
  pageContent: {
    padding: 4,
  },
  selected: {
    ...commonButtonItemStyles,
    color: colors.gray.dark,

    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      borderStyle: 'solid',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      bottom: 2,
      borderBottomColor: colors.gray.dark,
    },

    '&:before': {
      borderWidth: 8,
      marginLeft: 1,
    },
    '&:after': {
      borderWidth: 6,
      marginLeft: -1,
    },
  },
  notSelected: {
    ...commonButtonItemStyles,
    borderBottomColor: 'transparent',

    '&:hover': {
      color: colors.background,
    },
  },
  selectedMenu: {
    backgroundColor: colors.gray.light,
    '&:hover': {
      backgroundColor: colors.gray.light,
    },
    ...commonMenuItemStyles,
  },
  notSelectedMenu: {
    '&:hover': {
      backgroundColor: colors.gray.xlight,
    },
    ...commonMenuItemStyles,
  },
  toolbar: {
    minHeight: 'auto',
  },
}
