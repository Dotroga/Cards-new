import { ComponentType } from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalStyled } from '../styles/globalStyled.ts'
import { baseTheme } from '../styles/theme/theme.ts'
type Context = { kind: string }
export const withThemeProvider = (Story: ComponentType<Context>, context: Context) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyled />
      <Story {...context} />
    </ThemeProvider>
  )
}
