import { configureStore } from "@reduxjs/toolkit";
import { playlistApi } from "../services/playlist";
import playlistReducer from "./slices/playlist";
import tokenReducer from "./slices/token";

export const store = configureStore({
    reducer: {
        playlist: playlistReducer,
        token: tokenReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
});
