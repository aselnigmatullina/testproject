import {combineReducers, configureStore} from '@reduxjs/toolkit';
import booksListSlice from './store/booksListSlice';
import bookListSlice from './store/bookListSlice';

const rootReducer = combineReducers({
  booksList: booksListSlice,
  bookList: bookListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
