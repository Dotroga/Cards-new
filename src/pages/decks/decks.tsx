import { ChangeEvent, useEffect, useState } from 'react'

import { Button, Input } from '@/components'
import { Table } from '@/components/ui/table'
import { useCreatedDeckMutation, useGetDecksQuery } from '@/services/decks'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const itemsPerPage = useAppSelector(state => state.decks.itemsPerPage)
  const currentPage = useAppSelector(state => state.decks.currentPage)
  const searchByName = useAppSelector(state => state.decks.searchByName)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
  })
  const [createDeck, { isLoading: isCreateDeckLoading }] = useCreatedDeckMutation()
  const [perPage, setPerPage] = useState('')
  const [cardName, setCardNAme] = useState('')
  const changeItemsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    setPerPage(e.currentTarget.value)
  }
  const handleCreateCard = () => createDeck({ name: cardName })

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(decksActions.setSearchByName({ searchByName: perPage }))
    }, 1300)

    return () => clearTimeout(id)
  }, [perPage])
  // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery() // запрос по команде

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div>
        <Input onChange={changeItemsPerPage} value={perPage} name={'search name'} />
      </div>
      <div>
        isCreateDeckLoading: {isCreateDeckLoading.toString()}
        <Input
          onChange={e => setCardNAme(e.currentTarget.value)}
          value={cardName}
          name={'Created deck'}
        />
        <Button onClick={handleCreateCard}>Add</Button>
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
