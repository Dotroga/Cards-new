import { ComponentType } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyled } from '../../../styles/globalStyled.ts'
import { baseTheme } from '../../../styles/theme/theme'
import { LogOutIcon } from '../../icons/logOut.tsx'

import { Button } from './button'

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
  title: 'Components/Button',
  component: Button,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <LogOutIcon />
        Secondary Button
      </>
    ),
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',

    children: 'Tertiary Button',
    disabled: false,
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    href: '/Hello',
    variant: 'link',
    children: 'Link Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}
