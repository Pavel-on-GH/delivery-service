import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    // Добавить
    addProduct(state, actions) {
      const findProduct = state.products.find((obj) => obj.id === actions.payload.id);
      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...actions.payload, count: 1 });
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    //Увеличение счётчика
    dicrement(state, actions) {
      const findProduct = state.products.find((obj) => obj.id === actions.payload.id);
      if (findProduct) {
        findProduct.count++;
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    // Уменьшение счётчика
    increment(state, actions) {
      const findProduct = state.products.find((obj) => obj.id === actions.payload.id);
      if (findProduct) {
        findProduct.count > 1 ? findProduct.count-- : state.products.pop(findProduct);
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    // Удалить
    removeProduct(state, actions) {
      state.products = state.products.filter((obj) => obj.id !== actions.payload);
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    // Очистить
    clearBasket(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});
export const {
  addProduct,
  removeProduct,
  clearBasket,
  products,
  totalPrice,
  dicrement,
  increment,
} = basketSlice.actions;

export default basketSlice.reducer;
