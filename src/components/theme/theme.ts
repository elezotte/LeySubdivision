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
      hover: colors.gray.medium,
    },
    background: {
      default: colors.background,
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
            color: colors.gray.light,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: font.size.XL,
          fontWeight: font.weight.SEMIBOLD,
          color: colors.river.medium,
          marginBottom: '24px',
        },
        h2: {
          fontSize: font.size.ML,
          fontWeight: font.weight.SEMIBOLD,
          color: colors.gray.medium,
          marginBottom: '16px',
        },
        h3: {
          fontSize: font.size.LG,
          fontWeight: font.weight.REGULAR,
          color: colors.gray.medium,
          marginBottom: '8px',
        },
        body1: {
          fontSize: font.size.MD,
          fontWeight: font.weight.REGULAR,
          color: colors.gray.dark,
        },
        button: {
          fontSize: font.size.SM,
          fontWeight: font.weight.SEMIBOLD,
        },
        caption: {
          fontSize: font.size.SM,
          fontWeight: font.weight.LIGHT,
          color: colors.gray.dark,
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
