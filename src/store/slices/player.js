import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    isLoop: false,
    isPaused: true,
    currentId: null,
    isShuffled: false,
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        addAllTracks: (state, action) => {
            const { tracks } = action.payload;

            state.allTracks = [...tracks];
        },
        toggleIsLoop: (state) => {
            state.isLoop = !state.isLoop;
        },
        toggleIsPaused: (state, action) => {
            const { status } = action.payload;

            state.isPaused = status;
        },
        setCurrentId: (state, action) => {
            const { id } = action.payload;

            state.currentId = id;
        },
        toggleIsShuffled: (state) => {
            state.isShuffled = !state.isShuffled;
        },
    },
});

export const {
    addAllTracks,
    toggleIsLoop,
    toggleIsPaused,
    setCurrentId,
    toggleIsShuffled,
} = playerSlice.actions;

export default playerSlice.reducer;
