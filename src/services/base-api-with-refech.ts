import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

import { globalNavigate } from '@/utils/global-navigate.tsx'

const baseUrl = 'https://api.flashcards.andrii.es/v1/'

// Create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  // prepareHeaders: headers => {
  //   headers.append('x-short-access-token', 'true')
  // },
})

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { url: 'auth/refresh-token', method: 'POST' },
          api,
          extraOptions
        )

        if (refreshResult?.meta?.response?.status == 204) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          globalNavigate('/login')
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
