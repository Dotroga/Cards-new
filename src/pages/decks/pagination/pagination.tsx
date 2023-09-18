import styled from 'styled-components'

import { MyPagination, Typography } from '@/components'
import { Select } from '@/components/ui/select'
import { Pagination } from '@/services/decks'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

export const DecksPagination = (props: { pagination: Pagination }) => {
  const dispatch = useAppDispatch()
  const { itemsPerPage, totalPages, currentPage } = props.pagination
  const changeCurrentPage = (_event: React.ChangeEvent<unknown>, currentPage: number) => {
    dispatch(decksActions.setCurrentPage({ currentPage }))
  }
  const changeItemsPerPage = (itemsPerPage: number | string) => {
    typeof itemsPerPage === 'number' && dispatch(decksActions.setItemsPerPage({ itemsPerPage }))
  }

  return (
    <Wrapper>
      <MyPagination count={totalPages} page={currentPage} onChange={changeCurrentPage} />
      <Typography as={'body2'}>Show</Typography>
      <Select arr={[10, 15, 20, 30, 50]} value={itemsPerPage} onChange={changeItemsPerPage} />
      <Typography as={'body2'}> on page</Typography>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 15px;
`
