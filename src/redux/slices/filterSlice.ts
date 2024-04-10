import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface sortValueInterface {
  name: string;
  property: string;
}

const initialState = {
  categoryValue: 0,
  sortValue: {
    name: '... выбрать',
    property: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryValue(state, actions: PayloadAction<number>) {
      state.categoryValue = actions.payload;
    },
    setSortValue(state, actions: PayloadAction<sortValueInterface>) {
      state.sortValue = actions.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const { setCategoryValue, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
