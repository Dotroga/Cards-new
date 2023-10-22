import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { LoginArgs, ResendVerificationEmailArgs, SignUpArgs, User } from '@/services/auth/types.ts'
import { customFetchBase } from '@/services/base-api-with-refech.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Me'],
  baseQuery: customFetchBase,
  endpoints: builder => ({
    me: builder.query<User | null, void>({
      query: () => `auth/me`,
      extraOptions: { maxRetries: 1 },
      providesTags: ['Me'],
    }),
    login: builder.mutation<unknown, LoginArgs>({
      query: args => {
        return { url: 'auth/login', method: 'POST', params: args }
      },
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<any, Partial<SignUpArgs>>({
      query: body => ({
        url: `auth/sign-up`,
        method: 'POST',
        body,
      }),
    }),
    recoverPassword: builder.mutation<void, ResendVerificationEmailArgs>({
      query: body => ({
        url: 'auth/recover-password',
        method: 'POST',
        body: body,
      }),
    }),
    resetPassword: builder.mutation<void, Pick<LoginArgs, 'password'> & { token: string }>({
      query: body => ({
        url: `auth/reset-password/${body.token}`,
        method: 'POST',
        body: {
          password: body.password,
        },
      }),
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

export const {
  useLoginMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useSignUpMutation,
  useLogoutMutation,
  useResetPasswordMutation,
} = authApi
