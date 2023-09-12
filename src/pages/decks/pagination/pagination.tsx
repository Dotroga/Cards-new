import styled from 'styled-components'

import { MyPagination, Typography } from '@/components'
import { Select } from '@/components/ui/select'
import { Pagination } from '@/services/decks'
import { useAppDispatch } from '@/services/store.ts'

export const DecksPagination = (props: { pagination: Pagination }) => {
  const dispatch = useAppDispatch()
  const { itemsPerPage, totalItems, totalPages, currentPage } = props.pagination

  return (
    <Wrapper>
      <MyPagination count={totalPages} />
      <Typography as={'body2'}>Show</Typography>
      <Select arr={[10, 20, 30, 50, 100]} value={itemsPerPage} />
      <Typography as={'body2'}> on page</Typography>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 15px;
`
