import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params) => {
  const { categoryValue, sortValue } = params;
  const requestForProducts = 'https://64f1d3700e1e60602d2453ea.mockapi.io/items';
  const sortOrder = `sortBy=${sortValue.property.replace('-', '')}&order=${
    sortValue.property.includes('-') ? 'asc' : 'desc'
  }`;

  const { data } = await axios.get(
    categoryValue
      ? `${requestForProducts}?category=${categoryValue}&${sortOrder}`
      : `${requestForProducts}?${sortOrder}`,
  );
  return data;
});

const initialState = {
  products: [],
  status: 'loading',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, actions) {
      state.products = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'error';
        state.products = [];
      });
  },
});
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
