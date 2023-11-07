import { configureStore } from "@reduxjs/toolkit";
import { playlistApi } from "../services/playlist";
import playerReducer from "./slices/player";
import userReducer from "./slices/user";
import filtersReducer from "./slices/filters";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        user: userReducer,
        filters: filtersReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
});
