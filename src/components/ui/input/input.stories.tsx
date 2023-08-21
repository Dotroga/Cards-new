import { Meta } from '@storybook/react'

import { Input, PropsInputType } from './input.tsx'

import { withThemeProvider } from '@/utils/decorators.tsx'

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

    disabled: false,
  } as PropsInputType,
}
export const Password = {
  render: (args: PropsInputType) => {
    return <Input {...args} />
  },

  args: {
    type: 'password',
    name: 'Input text',
    disabled: false,
  } as PropsInputType,
}

export const Error = {
  render: (args: PropsInputType) => {
    return <Input {...args} />
  },

  args: {
    name: 'Input text',
    error: 'Error',
    disabled: false,
  } as PropsInputType,
}
