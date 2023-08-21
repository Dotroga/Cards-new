import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
