import { useState } from 'react'

import { Meta } from '@storybook/react'

import { TabSwitcher } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

export default {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} as Meta<typeof TabSwitcher>

export const Default = {
  render: (args: any) => {
    const [value, setValue] = useState('left')

    return (
      <TabSwitcher
        value={value}
        onClick={v => setValue(v)}
        disabled={args.disabled}
        array={args.array}
      />
    )
  },
  args: {
    array: ['Switcher', 'Hello', 'React'],
    disabled: false,
  },
}
