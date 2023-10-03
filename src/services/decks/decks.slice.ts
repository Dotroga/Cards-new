import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '@/services/common/types'

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  searchByName: undefined as undefined | string,
  minCardsCount: undefined as undefined | number,
  maxCardsCount: undefined as undefined | number,
  sort: undefined as Sort,
}

// const changeCardsCount = createAppAsyncThunk<{ null }, { value: number[] }>(
//   'lists/editingList',
//   async ({ value }, thunkAPI) => {
//     const { dispatch, rejectWithValue, getState } = thunkAPI
//
//     try {
//       dispatch(decksActions.changeCardsCount({ value }))
//     } catch (e) {
//       return rejectWithValue(null)
//     }
//   }
// )

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
    changeCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.minCardsCount = action.payload.value[0]
      state.maxCardsCount = action.payload.value[1]
      state.currentPage = 1
    },
    clearFilter: state => {
      state.minCardsCount = 0
      state.maxCardsCount = 30
      state.currentPage = 1
      state.itemsPerPage = 10
      state.searchByName = undefined
      state.sort = undefined
    },
    changeOrderBy: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
  },
})

export const decksActions = slice.actions
export const decks = slice.reducer
