'use client'
import { createTheme } from '@mui/material/styles'

export const bebasFont = 'var(--bebas-neue)'

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#EC4E20',
    },
    mode: 'dark',
    background: {
      default: '#050609',
      paper: '#1d1e21',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e6e6e6',
    },
  },
  typography: {
    fontFamily: 'var(--roboto)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  }
})

export default theme
