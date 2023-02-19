import { ThemeProvider } from '@mui/material'
import Navigation from 'components/navigation/Navigation'

import theme from 'components/theme/theme'

import CssBaseline from '@mui/material/CssBaseline'
import './global.styles.css'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
      <CssBaseline />
    </ThemeProvider>
  )
}
