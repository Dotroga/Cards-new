import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { CreateNewPassword } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/Create new password',
  component: CreateNewPassword,
  decorators: [withThemeProvider, withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
