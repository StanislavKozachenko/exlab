import { configureStore } from '@reduxjs/toolkit';
import test from './slices/testSlice';

export const store = configureStore({
  reducer: {
    test,
  },
});
