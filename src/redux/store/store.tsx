import { configureStore } from '@reduxjs/toolkit';

import {
  authSlice,
  userSlice,
  menuSlice,
  playlistSlice,
  filtersSlice,
  playlistApi,
} from '../slices';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    playlist: playlistSlice.reducer,
    filters: filtersSlice.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
