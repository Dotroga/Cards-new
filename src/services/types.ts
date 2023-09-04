import { Pagination } from '@/services/decks'

export type PaginatedEntity<T> = {
  pagination: Pagination
  items: T[]
}
