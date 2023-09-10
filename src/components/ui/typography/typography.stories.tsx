import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
  argTypes: {
    as: [
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
} as Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    return (
      <>
        {as.map(i => (
          <div key={i}>
            {i}
            <Typography as={i}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, cumque!
            </Typography>
          </div>
        ))}
      </>
    )
  },
}

const as = [
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
]
