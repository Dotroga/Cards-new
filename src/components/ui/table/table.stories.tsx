import { Meta } from '@storybook/react'

import { Input, PropsInputType } from '@/components'
import { Table } from '@/components/ui/table/table.tsx'
import { withThemeProvider } from '@/utils'

export default {
  title: 'Components/Table',
  component: Table.Root,
  decorators: [withThemeProvider],
} as Meta<typeof Table.Root>

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
