import { baseApi } from '@/services/base-api.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDeskArgs>({
        query: args => {
          return { url: 'v1/decks', method: 'GET', params: args }
        },
        providesTags: ['Decks'],
      }),
      createdDeck: builder.mutation<any, any>({
        query: ({ name }) => {
          return {
            url: 'v1/decks',
            method: 'POST',
            body: { name },
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreatedDeckMutation, useLazyGetDecksQuery } = decksApi

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

export interface DecksResponse {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}
