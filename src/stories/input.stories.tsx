import { Meta } from '@storybook/react'

import { Input, PropsInputType } from '../components/ui/input/input.tsx'

import { withThemeProvider } from './decorators.tsx'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} as Meta<typeof Input>

export const Default = {
  render: (args: PropsInputType) => {
    return <Input {...args} />
  },

  args: {
    name: 'input text',
    error: 'Error',
    disabled: false,
  } as PropsInputType,
}
