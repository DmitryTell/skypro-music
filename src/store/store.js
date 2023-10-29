import { configureStore } from "@reduxjs/toolkit";
import { playlistApi } from "../services/playlist";
import playerReducer from "./slices/playlist";
import tokenReducer from "./slices/token";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        token: tokenReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
});
