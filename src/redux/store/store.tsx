import { configureStore } from '@reduxjs/toolkit';

import { authSlice, menuSlice, playlistApi } from '../slices';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
