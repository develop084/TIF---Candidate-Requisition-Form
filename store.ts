import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@src/features/counterSlice';
import requisitionSlice from '@src/features/requisitionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    requisition: requisitionSlice
  },
});