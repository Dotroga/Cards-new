import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Eye } from '@/components'
import { withThemeProvider } from '@/utils/decorators.tsx'

const meta = {
  title: 'Icons/Eye',
  component: Eye,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Eye>

export default meta

export const Default = {
  render: () => {
    const [show, setShow] = useState(false)
    const handler = () => {
      setShow(prevState => !prevState)
    }

    return <Eye show={show} setShow={handler} />
  },
  args: {},
}
