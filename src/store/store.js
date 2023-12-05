import { configureStore } from "@reduxjs/toolkit";
import { playlistApi } from "../services/playlist";
import playerReducer from "./slices/player";
import commonReducer from "./slices/common";
import filtersReducer from "./slices/filters";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        common: commonReducer,
        filters: filtersReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playlistApi.middleware),
});
