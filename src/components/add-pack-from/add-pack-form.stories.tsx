import type { Meta, StoryObj } from '@storybook/react'

import { AddPackFrom } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Deck/Add pack',
  component: AddPackFrom,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof AddPackFrom>

export default meta
type Story = StoryObj<typeof meta>

export const Add: Story = {
  args: {
    onSubmit: data => console.info(data),
    type: 'add',
  },
}

export const Edit: Story = {
  args: {
    onSubmit: data => console.info(data),
    type: 'edit',
  },
}
