import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery()
  // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery()

  if (isLoading) return <div>Loading...</div>
  console.log(data)

  return <div>Decks</div>
}
