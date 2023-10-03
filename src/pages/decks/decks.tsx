import { AddNewPack } from '@/pages/decks/add-new-pack'
import { DecksNav } from '@/pages/decks/decks-nav'
import { DecksWrapper } from '@/pages/decks/decks.styled.ts'
import { DecksPagination } from '@/pages/decks/pagination'
import { DeckTable } from '@/pages/decks/table/table.tsx'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectMax,
  selectMin,
  selectOrderBy,
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
  const orderBy = useAppSelector(selectOrderBy)

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    orderBy,
  })

  // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery() // запрос по команде

  if (isLoading) return <div>Loading...</div>

  return (
    <DecksWrapper className="Decks">
      <AddNewPack />
      <DecksNav />
      <DeckTable items={data?.items} />
      <DecksPagination pagination={data!.pagination} />
    </DecksWrapper>
  )
}
