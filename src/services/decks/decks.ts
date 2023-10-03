import { baseApi } from '@/services/base-api.ts'
import { Deck } from '@/services/decks/types.ts'
import { PaginatedEntity } from '@/services/types.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDeskArgs>({
        query: args => {
          return { url: 'v1/decks', method: 'GET', params: args }
        },
        providesTags: ['Decks'],
      }),
      createdDeck: builder.mutation<Deck, Pick<Deck, 'name' | 'isPrivate'>>({
        query: data => {
          return {
            url: 'v1/decks',
            method: 'POST',
            body: data,
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

export type DecksResponse = PaginatedEntity<Deck> & {
  maxCardsCount: number
}
