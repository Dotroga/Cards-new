import { Button } from '@/components'
import { AddNewPack } from '@/pages/decks/add-new-pack'
import { DecksNav } from '@/pages/decks/decks-nav'
import { DecksWrapper } from '@/pages/decks/decks.styled.ts'
import { DecksPagination } from '@/pages/decks/pagination'
import { DeckTable } from '@/pages/decks/table/table.tsx'
import { useLogoutMutation } from '@/services/auth/auth.ts'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectMax,
  selectMin,
  selectSearchByName,
  selectSort,
  useGetDecksQuery,
} from '@/services/decks'
import { useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const currentPage = useAppSelector(selectCurrentPage)
  const searchByName = useAppSelector(selectSearchByName)
  const maxCardsCount = useAppSelector(selectMax)
  const minCardsCount = useAppSelector(selectMin)
  const sort = useAppSelector(selectSort)

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    orderBy: sort ? `${sort?.key}-${sort?.direction}` : undefined,
  })

  const [logout] = useLogoutMutation()

  // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery() // запрос по команде

  if (isLoading) return <div>Loading...</div>

  return (
    <DecksWrapper className="Decks">
      <Button onClick={() => logout()}>Log Out</Button>
      <AddNewPack />
      <DecksNav />
      <DeckTable items={data?.items} />
      <DecksPagination pagination={data!.pagination} />
    </DecksWrapper>
  )
}
