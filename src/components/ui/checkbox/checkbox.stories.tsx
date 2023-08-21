import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Checkbox } from './checkbox.tsx'

import { withThemeProvider } from '@/utils/decorators.tsx'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} as Meta<typeof Checkbox>

export const Default = {
  render: (args: any) => {
    const [checked, setChecked] = useState(false)

    return <Checkbox checked={checked} onChange={() => setChecked(!checked)} {...args} />
  },

  args: {
    children: 'Click here',
    disabled: true,
  },
}
