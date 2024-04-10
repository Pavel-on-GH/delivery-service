import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type BasketSliceType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

interface BasketSliceInterface {
  products: BasketSliceType[];
  totalPrice: number;
}

const getProductsStorage = localStorage.getItem('Basket');
const storageProducts: BasketSliceType[] = getProductsStorage ? JSON.parse(getProductsStorage) : [];
const PriceStorage = Number(localStorage.getItem('TotalPrice'));

const initialState: BasketSliceInterface = {
  products: storageProducts,
  totalPrice: PriceStorage,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    // Добавить
    addProduct(state, actions: PayloadAction<BasketSliceType>) {
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
    dicrement(state, actions: PayloadAction<BasketSliceType>) {
      const findProduct = state.products.find((obj) => obj.id === actions.payload.id);
      if (findProduct) {
        findProduct.count++;
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    // Уменьшение счётчика
    increment(state, actions: PayloadAction<BasketSliceType>) {
      const findProduct = state.products.find((obj) => obj.id === actions.payload.id);
      if (findProduct) {
        findProduct.count > 1
          ? findProduct.count--
          : (state.products = state.products.filter((obj) => obj.id !== findProduct.id));
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    // Удалить
    removeProduct(state, actions: PayloadAction<BasketSliceType>) {
      state.products = state.products.filter((obj) => obj.id !== actions.payload.id);
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
export const { addProduct, removeProduct, clearBasket, dicrement, increment } = basketSlice.actions;

export const selectBascket = (state: RootState) => state.basket;

export default basketSlice.reducer;
