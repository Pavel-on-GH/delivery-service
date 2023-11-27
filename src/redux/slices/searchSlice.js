import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, actions) {
      state.searchValue = actions.payload;
    },
  },
});
export const { searchValue, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
