import { SxProps } from '@mui/material'
import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

const commonButtonItemStyles: SxProps = {
  fontFamily: font.family.logo,
  fontWeight: 400,
  borderRadius: 0,
  fontSize: font.size.ML,
  paddingY: 0,
  paddingX: 2,
  marginX: 0,
  marginTop: 0,
  marginBottom: '-2px',
  textDecoration: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: 2,
  textTransform: 'none',
  lineHeight: 1,
  minHeight: 52,
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
    backgroundColor: colors.background,
    boxShadow: 'none',
    display: 'flex',
    borderBottom: `2px solid ${colors.gray.light}`,
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
    marginTop: '2px',
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
    borderBottomColor: colors.gray.medium,
    ...commonButtonItemStyles,
    color: colors.gray.dark,
  },
  notSelected: {
    ...commonButtonItemStyles,
    borderBottomColor: 'transparent',

    '&:hover': {
      color: colors.river.light,
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
