import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, actions: PayloadAction<string>) {
      state.searchValue = actions.payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search;
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
