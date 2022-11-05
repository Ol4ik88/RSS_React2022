import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { ICharacter } from 'type/type';
import { HomeState, IPagination } from './slice.type';

const initialState: HomeState = {
  textSearch: localStorage.getItem('searchQuery') || '',
  limit: '10',
  sorting: 'name:asc',
  cards: [],
  currentPage: 1,
  pageCount: 1,
  totalElements: 1,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.textSearch = action.payload;
    },
    setPagination: (state, action: PayloadAction<IPagination>) => {
      state.currentPage = action.payload.currentPage;
      state.pageCount = action.payload.pageCount;
      state.totalElements = action.payload.totalElements;
    },
    setLimit: (state, action: PayloadAction<string>) => {
      state.limit = action.payload;
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    setCards: (state, action: PayloadAction<ICharacter[]>) => {
      state.cards = action.payload;
    },
  },
});

export const setCards =
  (text: string, limitCards: string, sortCards: string, pageNumber: number): AppThunk =>
  async (dispatch) => {
    const HOST = 'https://the-one-api.dev/v2/';
    const TOKEN = 'utxRxt1T7kr6gmJDi5LI';
    const response = await fetch(
      `${HOST}character?race=/${text}/i&sort=${sortCards}&limit=${limitCards}&page=${pageNumber}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      }
    );
    const data = await response.json();
    dispatch(
      homeSlice.actions.setPagination({
        currentPage: pageNumber,
        pageCount: data.pages,
        totalElements: data.total,
      })
    );
    dispatch(homeSlice.actions.setCards(data.docs));
  };

export const { setSearchText, setLimit, setSorting } = homeSlice.actions;

export const selectHomeState = (state: RootState) => state.home;

export default homeSlice.reducer;
