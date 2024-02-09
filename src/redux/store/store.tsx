import { configureStore } from '@reduxjs/toolkit';

import { authSlice, menuSlice } from '../slices';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
