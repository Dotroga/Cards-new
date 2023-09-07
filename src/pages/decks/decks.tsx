import { useEffect, useState } from 'react'

import { Button, Input, Range, TabSwitcher } from '@/components'
import { Table } from '@/components/ui/table'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectMax,
  selectMin,
  selectSearchByName,
  useGetDecksQuery,
} from '@/services/decks'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const currentPage = useAppSelector(selectCurrentPage)
  const searchByName = useAppSelector(selectSearchByName)
  const maxCardsCount = useAppSelector(selectMax)
  const minCardsCount = useAppSelector(selectMin)

  const dispatch = useAppDispatch()
  const [range, setRange] = useState([0, 20])
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
  })

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(decksActions.changeCardsCount({ value: range }))
    }, 1000)

    return () => clearTimeout(id)
  })

  // // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery() // запрос по команде

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div>
        <Input placeholder="Input search" />
        <TabSwitcher value={'All card'} onClick={() => {}} array={['My card', 'All card']} />
        <Range onValueChange={setRange} min={0} max={30} value={[range[0], range[1]]} />
        <Button>Clear filter</Button>
      </div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created By</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items.map(desk => (
            <Table.Row key={desk.id}>
              <Table.Cell>{desk.name}</Table.Cell>
              <Table.Cell>{desk.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(desk.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{desk.author.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
