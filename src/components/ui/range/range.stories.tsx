import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Range } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

export default {
  title: 'Components/Range',
  component: Range,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} as Meta<typeof Range>

export const Default = {
  render: () => {
    const [value, setValue] = useState([0, 100])
    const handler = (e: number[]) => {
      setValue(e)
    }

    return <Range value={value} onValueChange={handler} disabled={false} />
  },
}
