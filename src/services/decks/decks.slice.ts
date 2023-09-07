import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  searchByName: undefined as undefined | string,
  minCardsCount: undefined as undefined | number,
  maxCardsCount: undefined as undefined | number,
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
    },
  },
})

export const decksActions = slice.actions
export const decks = slice.reducer
