import { createSlice } from "@reduxjs/toolkit";
import { shuffleTrackList } from "../../data/secondary-functions";

const initialState = {
    allTracks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    shuffledTracks: [],
    isLoop: false,
    isPaused: true,
    currentId: null,
    isShuffled: false,
    nextId: null,
    prevId: null,
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
        shuffleTracks: (state, action) => {
            const { tracks } = action.payload;

            state.shuffledTracks = [...shuffleTrackList(tracks)];
        },
        getNewId: (state, action) => {
            const { ids, currentId } = action.payload;
            const currentIndex = ids.indexOf(currentId);

            state.nextId = ids[currentIndex + 1];
            state.prevId = ids[currentIndex - 1];
        },
    },
});

export const {
    addAllTracks,
    toggleIsLoop,
    toggleIsPaused,
    setCurrentId,
    toggleIsShuffled,
    shuffleTracks,
    getNewId,
} = playerSlice.actions;

export default playerSlice.reducer;
