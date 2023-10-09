import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { customFetchBase } from '@/services/base-api-with-refech.ts'
import { Deck } from '@/services/decks/types.ts'
import { PaginatedEntity } from '@/services/types.ts'

export const decksApi = createApi({
  reducerPath: 'decksApi',
  tagTypes: ['Decks'],
  baseQuery: customFetchBase,
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, GetDeskArgs>({
      query: args => {
        return { url: 'decks', method: 'GET', params: args }
      },
      providesTags: ['Decks'],
    }),
    createdDeck: builder.mutation<Deck, Pick<Deck, 'name' | 'isPrivate'>>({
      query: data => {
        return {
          url: 'decks',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['Decks'],
    }),
  }),
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

export type DecksResponse = PaginatedEntity<Deck> & {
  maxCardsCount: number
}
