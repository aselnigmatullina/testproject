import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from '../api/apiClient';
import {MainListItem} from '../types/MainListItem';

export type BooksListState = {
  booksData: MainListItem[];
  search: string;
  loading: boolean;
  error: boolean;
};

const initialState: BooksListState = {
  booksData: [],
  search: '',
  loading: false,
  error: true,
};

export const fetchBooksData = createAsyncThunk(
  'fetchBooksData',
  async () => {
    const response = await apiClient.fetchBooksData();
    if (response.kind === 'success') {
      return {
        allData: response.body ?? [],
      };
    } else {
      throw 'Ошибка';
    }
  },
);

const booksListSlice = createSlice({
  name: 'booksDataList',
  initialState: initialState,
  reducers: {
    searchByName: (state, action) => {
      const filteredResult = state.booksData.filter((item) =>
        item.culture?.toLowerCase()?.includes(action.payload)
      );
      // return {
      //   ...state,
      //   booksData:
      //     action.payload?.length > 0 ? filteredResult : [...state.booksData]
      // };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.pending, (state) => {
        state.loading = true;
        // @ts-ignore
        state.error = undefined;
      })
      .addCase(fetchBooksData.fulfilled, (state, action) => {
        // @ts-ignore
        state.booksData = state.booksData.concat(action.payload.allData);
        state.loading = false;
      })
      .addCase(fetchBooksData.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const {searchByName} = booksListSlice.actions;

export default booksListSlice.reducer;
