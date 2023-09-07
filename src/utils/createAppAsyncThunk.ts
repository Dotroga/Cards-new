import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch, RootState } from '@/services/store.ts'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null
}>()
