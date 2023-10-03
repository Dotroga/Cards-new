import { RootState } from '@/services/store.ts'

export const selectItemsPerPage = (state: RootState) => state.decks.itemsPerPage
export const selectCurrentPage = (state: RootState) => state.decks.currentPage
export const selectSearchByName = (state: RootState) => state.decks.searchByName
export const selectMax = (state: RootState) => state.decks.maxCardsCount
export const selectMin = (state: RootState) => state.decks.minCardsCount
export const selectSort = (state: RootState) => state.decks.sort
