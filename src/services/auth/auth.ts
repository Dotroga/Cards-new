import { baseApi } from '@/services/base-api.ts'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<any, any>({
        query: args => {
          return { url: 'v1/auth/me', method: 'GET', params: args }
        },
        extraOptions: {
          maxRetries: 0, // кол-во повторных запросов при ошибке, по дефолту стоит 1
        },
      }),
      login: builder.mutation<any, any>({
        query: args => {
          return { url: 'v1/auth/login', method: 'POST', params: args }
        },
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery } = authApi
