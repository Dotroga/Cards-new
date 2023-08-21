import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: [
        'large',
        'h1',
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
  args: {
    as: 'h2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
