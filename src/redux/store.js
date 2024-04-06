import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import searchSlice from './slices/searchSlice';
import basketSlice from './slices/basketSlice';
import productsSlice from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    search: searchSlice,
    basket: basketSlice,
    products: productsSlice,
  },
});
