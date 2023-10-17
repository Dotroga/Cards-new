import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { SignUp } from '@/components/auth/sign-up/sign-up.tsx'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  decorators: [withThemeProvider, withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
