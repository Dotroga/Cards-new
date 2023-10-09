import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { User } from '@/services/auth/types.ts'
import { customFetchBase } from '@/services/base-api-with-refech.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Me'],
  baseQuery: customFetchBase,
  endpoints: builder => ({
    me: builder.query<User | null, void>({
      query: () => `auth/me`,
      extraOptions: { maxRetries: false },
      providesTags: ['Me'],
    }),
    login: builder.mutation<any, any>({
      query: args => {
        return { url: 'auth/login', method: 'POST', params: args }
      },
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<unknown, void>({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useLogoutMutation } = authApi
