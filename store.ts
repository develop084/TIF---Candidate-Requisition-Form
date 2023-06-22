import { configureStore } from '@reduxjs/toolkit';
import requisitionSlice from '@src/features/requisitionSlice';

export const store = configureStore({
  reducer: {
    requisition: requisitionSlice
  },
});