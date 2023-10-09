import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { app } from '@/services/app/app.slice.ts'
import { authApi } from '@/services/auth/auth.ts'
import { decksApi } from '@/services/decks'
import { decks } from '@/services/decks/decks.slice.ts'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [decksApi.reducerPath]: decksApi.reducer,
    decks,
    app,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(decksApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
