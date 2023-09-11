import { Meta } from '@storybook/react'

import { Range } from '@/components'
import { MyPagination } from '@/components/ui/pagination/pagination.tsx'
import { withThemeProvider } from '@/utils/decorators.tsx'

export default {
  title: 'Components/Pagination',
  component: MyPagination,
  decorators: [withThemeProvider],
  tags: ['autodocs'],
} as Meta<typeof Range>

export const Default = {
  render: () => {
    // const [value, setValue] = useState([0, 100])
    // const handler = (e: number[]) => {
    //   setValue(e)
    // }

    return <MyPagination count={10} />
  },
}
