import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { ProductBlockType } from '../../components/ProductBlock';

type fetchProductsParamsType = {
  categoryValue: number;
  sortValue: {
    name: string;
    property: string;
  };
};

export const fetchProducts = createAsyncThunk<ProductBlockType[], fetchProductsParamsType>(
  'products/fetchProducts',
  async (params) => {
    const { categoryValue, sortValue } = params;
    const requestForProducts = 'https://64f1d3700e1e60602d2453ea.mockapi.io/items';
    const sortOrder = `sortBy=${sortValue.property.replace('-', '')}&order=${
      sortValue.property.includes('-') ? 'asc' : 'desc'
    }`;
    const { data } = await axios.get<ProductBlockType[]>(
      categoryValue
        ? `${requestForProducts}?category=${categoryValue}&${sortOrder}`
        : `${requestForProducts}?${sortOrder}`,
    );
    return data;
  },
);

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface productsSliceInterface {
  products: ProductBlockType[];
  status: Status;
}

const initialState: productsSliceInterface = {
  products: [],
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, actions: PayloadAction<ProductBlockType[]>) {
      state.products = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.products = [];
      });
  },
});
export const selectProduct = (state: RootState) => state.products;
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
