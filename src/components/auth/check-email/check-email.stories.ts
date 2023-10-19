import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { CheckEmail } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/Check email',
  component: CheckEmail,
  decorators: [withThemeProvider, withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: '/Hello',
    email: 'test@test.com',
  },
}
