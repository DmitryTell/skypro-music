import { configureStore } from "@reduxjs/toolkit";
import { playlistApi } from "../services/playlist";
import playerReducer from "./slices/player";
import userReducer from "./slices/user";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        user: userReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
});
