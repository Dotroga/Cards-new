import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
