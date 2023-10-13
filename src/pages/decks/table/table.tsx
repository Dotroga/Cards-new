import { FC } from 'react'

import { Column, Table } from '@/components/ui/table'
import { Sort } from '@/services/common/types'
import { selectSort } from '@/services/decks'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { Deck } from '@/services/decks/types.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const DeckTable: FC<{ items: Deck[] | undefined }> = ({ items }) => {
  const dispatch = useAppDispatch()
  const sort = useAppSelector(selectSort)
  const handleSort = (sort: Sort) => {
    dispatch(decksActions.changeOrderBy({ sort }))
  }
  const columns = [
    {
      key: 'name',
      title: 'Name',
      sortable: false,
      width: '40%',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
      sortable: false,
      width: '18%',
    },
    {
      key: 'updated',
      title: 'Last Updated',
      sortable: false,
      width: '18%',
    },
    {
      key: 'author.name',
      title: 'Created by',
      sortable: false,
      width: '24%',
    },
  ] as Column[]

  return (
    <Table.Root>
      <Table.Header columns={columns} sort={sort} onSort={handleSort} />
      <Table.Body>
        {items &&
          items.map(desk => (
            <Table.Row key={desk.id}>
              <Table.Cell>{desk.name}</Table.Cell>
              <Table.Cell>{desk.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(desk.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{desk.author.name}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}

export default Table
