import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = testSlice.actions;

export default testSlice.reducer;
