import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as apiClient from '../api/apiClient';
import {MainListItem} from '../types/MainListItem';

export type BookListState = {
  bookData: MainListItem | null;
  loading: boolean;
  error: boolean;
};

const initialState: BookListState = {
  bookData: null,
  loading: false,
  error: true,
};

export const fetchBookData = createAsyncThunk<{id?: number}>(
  'fetchBookData',
  // @ts-ignore
  async (id: number) => {
    const response = await apiClient.fetchBookData(id);
    if (response.kind === 'success') {
      return {
        bookData: response.body ?? [],
      };
    } else {
      throw 'Ошибка';
    }
  },
);

const bookListSlice = createSlice({
  name: 'bookDataList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookData.pending, (state) => {
        state.loading = true;
        // @ts-ignore
        state.error = undefined;
      })
      .addCase(fetchBookData.fulfilled, (state, action) => {
        // @ts-ignore
        state.bookData = action.payload.bookData;
        state.loading = false;
      })
      .addCase(fetchBookData.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default bookListSlice.reducer;
