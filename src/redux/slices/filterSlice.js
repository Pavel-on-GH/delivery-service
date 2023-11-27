import { createSlice } from '@reduxjs/toolkit';

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
    setCategoryValue(state, actions) {
      state.categoryValue = actions.payload;
    },
    setSortValue(state, actions) {
      state.sortValue = actions.payload;
    },
  },
});
export const { categoryValue, setCategoryValue, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
