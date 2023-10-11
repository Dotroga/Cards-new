import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import { App } from './App'
import { GlobalStyled } from './styles/globalStyled'
import { baseTheme } from './styles/theme/theme'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={baseTheme}>
    <GlobalStyled />
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </ThemeProvider>
)
