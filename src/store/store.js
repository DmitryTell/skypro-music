import { configureStore } from "@reduxjs/toolkit";
import { playerApi } from "../services/player";
import playerReducer from "./slices/player";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        [playerApi.reducerPath]: playerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playerApi.middleware),
});
