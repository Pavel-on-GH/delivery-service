import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, actions) {
      state.products.push(actions.payload);
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeProduct(state, actions) {
      state.products = state.products.filter((obj) => obj.id !== actions.payload);
    },
    clearBasket(state) {
      state.products = [];
    },
  },
});
export const { addProduct, removeProduct, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
