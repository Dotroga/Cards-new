import { ComponentType } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyled } from '../../../styles/globalStyled.ts'
import { baseTheme } from '../../../styles/theme/theme'

import Typography from './typography.tsx'

type Context = { kind: string }
const withThemeProvider = (Story: ComponentType<Context>, context: Context) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyled />
      <Story {...context} />
    </ThemeProvider>
  )
}

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      as: [
        'h2',
        'h3',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'overline',
        'caption',
        'error',
        'link',
        'link2',
      ],
    },
  },
} as Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { as: 'h2' },
}
