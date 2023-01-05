import { configureStore } from '@reduxjs/toolkit';
import planeSlice from './plane/planeSlice';
import planesSlice from './planes/planesSlice';

export const store = configureStore({
  reducer: {
    planes: planesSlice,
    plane: planeSlice,
  },
});
