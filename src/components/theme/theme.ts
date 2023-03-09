import { createTheme } from '@mui/material/styles'

import { colors, font } from './themeSettings'

// Add span as a valid variant to Typography component
declare module '@mui/material/styles' {
  interface TypographyVariants {
    span: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    span?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: colors.river.medium,
      main: colors.river.medium,
      dark: colors.river.dark,
    },
    secondary: {
      light: colors.gray.light,
      main: colors.gray.medium,
      dark: colors.gray.dark,
    },
    action: {
      active: colors.river.dark,
      hover: colors.river.light,
    },
    background: {
      default: colors.gray.xxlight,
    },
    text: {
      disabled: colors.gray.dark,
      primary: colors.gray.dark,
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 12%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

          '&.Mui-expanded:first-of-type': {
            marginTop: '32px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: colors.river.dark,
          '&:hover': {
            color: colors.river.light,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: colors.gray.medium,
          fontFamily: font.family.logo,
          fontSize: font.size.LG,
          fontWeight: font.weight.BOLD,
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',

          '> svg': {
            fontSize: 30,
            marginRight: 6,
          },
        },
        h2: {
          color: colors.gray.mediumLight,
          fontSize: font.size.ML,
          fontWeight: font.weight.SEMIBOLD,
          marginBottom: '12px',
        },
        body1: {
          color: colors.gray.dark,
          fontWeight: font.weight.REGULAR,
          fontSize: font.size.MD,
        },
        button: {
          fontWeight: font.weight.SEMIBOLD,
          fontSize: font.size.SM,
        },
        caption: {
          color: colors.gray.dark,
          fontSize: font.size.SM,
          fontWeight: font.weight.LIGHT,
        },
        subtitle1: {
          fontSize: font.size.MD,
          fontWeight: font.weight.REGULAR,
          color: colors.gray.medium,
          marginLeft: 1,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 50,

          '@media (min-width: 600px)': {
            minHeight: 50,
          },
        },
      },
    },
  },
  typography: {
    fontSize: font.size.MD,
    fontFamily: font.family.body,
    span: {
      fontSize: 'inherit',
      color: 'inherit',
    },
  },
})

export default theme
