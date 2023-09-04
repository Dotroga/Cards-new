import { User } from '../auth/types'

import { PaginatedEntity } from '@/services/types.ts'

export type GetDecksParams = {
  authorId?: string
  name?: string
  minCardsCount?: number
  maxCardsCount?: number
}

export type Decks = Deck[]

export type DeckAuthor = Pick<User, 'id' | 'name'> // { id: string, name: string }

export interface Pagination {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type GetDeskArgs = {
  authorId?: string
  name?: string
  minCardsCount?: number
  maxCardsCount?: number
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export interface Author {
  id: string
  name: string
}

export interface Deck {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: string | null
  rating: number
  isDeleted?: boolean
  isBlocked?: boolean
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export type DecksResponse = PaginatedEntity<Deck> & {
  maxCardsCount: number
}

export type CreateDeckInput = FormData // { cover: File, name: string, isPrivate: boolean }
export type DeleteDeckInput = { deckId: Deck['id'] } // { deckId: string }
