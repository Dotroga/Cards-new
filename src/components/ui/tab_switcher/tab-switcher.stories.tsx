import { useState } from 'react'

import { Meta } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/tab_switcher/tab-switcher.tsx'
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
        onValueChange={v => setValue(v)}
        type={'single'}
        array={args.array}
      />
    )
  },
  args: {
    array: ['Switcher', 'Hello', 'React'],
  },
}
