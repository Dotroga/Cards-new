import { FC, useState } from 'react'

import { Column, Table } from '@/components/ui/table'
import { Header } from '@/components/ui/table/t-header.tsx'
import { Sort } from '@/services/common/types'
import { Deck } from '@/services/decks/types.ts'

export const DeckTable: FC<{ items: Deck[] | undefined }> = ({ items }) => {
  const [sort, setSort] = useState<Sort>(null)

  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'createdBy',
      title: 'Created by',
    },
  ] as Column[]

  return (
    <Table.Root>
      <Header columns={columns} sort={sort} onSort={setSort} />
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
