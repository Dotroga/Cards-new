import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isShowAddPackForm: false,
}

const slice = createSlice({
  initialState,
  name: 'appSlice',
  reducers: {
    changeShowAddPackFrom: (state, action: PayloadAction<{ isShow: boolean }>) => {
      state.isShowAddPackForm = action.payload.isShow
    },
  },
})

export const appActions = slice.actions
export const app = slice.reducer
