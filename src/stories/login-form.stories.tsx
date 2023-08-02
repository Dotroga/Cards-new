import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/auth/login-form/login-form.tsx'
import { withThemeProvider } from '@/stories/decorators.tsx'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
