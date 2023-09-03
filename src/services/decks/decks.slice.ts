import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  searchByName: '',
}

const slice = createSlice({
  initialState,
  name: 'decksSlice',
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<{ itemsPerPage: number }>) => {
      state.itemsPerPage = action.payload.itemsPerPage
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setSearchByName: (state, action: PayloadAction<{ searchByName: string }>) => {
      state.searchByName = action.payload.searchByName
    },
  },
})

export const decksActions = slice.actions
export const decks = slice.reducer
