import { Table } from '@/components/ui/table'
import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 15,
  })
  // const [initializeQuery, { data, isloading }] = useLazyGetDecksQuery()

  if (isLoading) return <div>Loading...</div>
  console.log(data)

  return (
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
  )
}
