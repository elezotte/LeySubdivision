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
    light: '#32a6ff',
    medium: '#2884cc',
    dark: '#1e6398',
  },
  gray: {
    xxlight: '#f7f4f0',
    xlight: '#f7f0e7',
    light: '#e9e0d1',
    mediumLight: '#aca396',
    medium: '#777168',
    mediumDark: '#5e5952',
    dark: '#2b2926',
  },
  warning: {
    xlight: '#FFF4D1',
    light: '#FFE299',
    medium: '#fbbd05',
    mediumDark: '#DBA82A',
    dark: '#AB7A02',
  },
  alert: {
    light: '#ffcfcf',
    medium: '#e32323',
    dark: '#b41c1b',
  },
}

export const font = {
  family: {
    logo: '"Roboto Slab", serif',
    body: '"Roboto", sans-serif',
  },
  size: {
    SM: 9,
    MS: 13,
    MD: 16,
    ML: 20,
    LG: 24,
    XL: 32,
  },
  weight: {
    LIGHT: 200,
    REGULAR: 300,
    SEMIBOLD: 500,
    BOLD: 700,
  },
}
