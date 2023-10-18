import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ForgotPassword } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/Forgot password',
  component: ForgotPassword,
  decorators: [withThemeProvider, withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
