import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
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
  'large' as keyof typeof components,
  'h1' as keyof typeof components,
  'h2' as keyof typeof components,
  'h3' as keyof typeof components,
  'subtitle1' as keyof typeof components,
  'subtitle2' as keyof typeof components,
  'body1' as keyof typeof components,
  'body2' as keyof typeof components,
  'overline' as keyof typeof components,
  'caption' as keyof typeof components,
  'error' as keyof typeof components,
  'link' as keyof typeof components,
  'link2' as keyof typeof components,
]
const components = {
  large: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  overline: 'p',
  caption: 'caption',
  error: 'p',
  link: 'a',
  link2: 'a',
}
