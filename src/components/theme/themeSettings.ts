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
    SM: 9,
    MS: 13,
    MD: 15,
    ML: 19,
    LG: 23,
    XL: 27,
  },
  weight: {
    LIGHT: 100,
    REGULAR: 300,
    SEMIBOLD: 500,
    BOLD: 700,
  },
}
