import { Table } from '@/components/ui/table'
import { AddNewPack } from '@/pages/decks/add-new-pack'
import { DecksNav } from '@/pages/decks/decks-nav'
import { DecksWrapper } from '@/pages/decks/decks.styled.ts'
import { DecksPagination } from '@/pages/decks/pagination'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectMax,
  selectMin,
  selectSearchByName,
  useGetDecksQuery,
} from '@/services/decks'
import { useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const currentPage = useAppSelector(selectCurrentPage)
  const searchByName = useAppSelector(selectSearchByName)
  const maxCardsCount = useAppSelector(selectMax)
  const minCardsCount = useAppSelector(selectMin)

  // const dispatch = useAppDispatch()

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
  })

  // // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery() // запрос по команде

  if (isLoading) return <div>Loading...</div>

  return (
    <DecksWrapper className="Decks">
      <AddNewPack />
      <DecksNav />
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
      <DecksPagination pagination={data.pagination} />
    </DecksWrapper>
  )
}
