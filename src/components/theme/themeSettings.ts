import { SxProps } from '@mui/material'

export interface MuiSxStyles {
  [key: string]: SxProps
}

export interface ReactStyles {
  [key: string]: React.CSSProperties | ReactStyles
}

export const colors = {
  background: '#ffffff',
  grass: {
    medium: '#1dbc33',
  },
  river: {
    medium: '#49b0ff',
    dark: '#1d8ee5',
  },
  gray: {
    xlight: '#f7ead8',
    light: '#ded3c2',
    mediumLight: '#aca396',
    medium: '#777168',
    mediumDark: '#5e5952',
    dark: '#2b2926',
  },
  warning: {
    medium: '#e32323',
    dark: '#cb1f1f',
  },
}

export const font = {
  family: {
    logo: '"Roboto Slab", serif',
    body: '"Roboto", sans-serif',
  },
  size: {
    SM: 8,
    MS: 12,
    MD: 14,
    ML: 18,
    LG: 22,
    XL: 26,
  },
  weight: {
    LIGHT: 100,
    REGULAR: 300,
    SEMIBOLD: 500,
    BOLD: 700,
  },
}
