import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from './Select'

import { withThemeProvider } from '@/utils'

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [withThemeProvider],
  argTypes: {},
  args: {
    arr: [
      'Berry Red',
      'Red',
      'Orange',
      'Yellow',
      'Olive Green',
      'Lime Green',
      'Green',
      'Mint Green',
      'Teal',
    ],
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => {
  const [value, setValue] = useState<string | number>(args.arr[0])

  return <Select onChange={value => setValue(value)} value={value} arr={args.arr} />
}

export const Primary = Template.bind({})
