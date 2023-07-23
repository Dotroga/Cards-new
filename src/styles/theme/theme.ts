import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { typography } from './typography'

export interface ITheme {
  colors: typeof colors
  typography: typeof typography
}

export const baseTheme: DefaultTheme = {
  colors,
  typography,
}
