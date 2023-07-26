import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App'
import { GlobalStyled } from './styles/globalStyled'
import { baseTheme } from './styles/theme/theme'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={baseTheme}>
    <GlobalStyled />
    <App />
  </ThemeProvider>
)
