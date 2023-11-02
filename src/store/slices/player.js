import { createSlice } from "@reduxjs/toolkit";
import { shuffleTrackList } from "../../data/secondary-functions";

const initialState = {
    allTracks: [],
    shuffledTracks: [],
    currentTrack: null,
    isLoop: false,
    isPaused: true,
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
        shuffleTracks: (state, action) => {
            const { tracks } = action.payload;

            state.shuffledTracks = [...shuffleTrackList(tracks)];
        },
        toggleIsLoop: (state) => {
            state.isLoop = !state.isLoop;
        },
        toggleIsPaused: (state, action) => {
            const { status } = action.payload;

            state.isPaused = status;
        },
        setCurrentTrack: (state, action) => {
            const { id, tracks } = action.payload;

            if (!id || !tracks?.length) {
                state.currentTrack = null;
            } else {
                state.currentTrack = {
                    ...tracks.find((track) => track.id === id),
                };
            }
        },
        toggleIsShuffled: (state) => {
            state.isShuffled = !state.isShuffled;
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
    shuffleTracks,
    toggleIsLoop,
    toggleIsPaused,
    setCurrentTrack,
    toggleIsShuffled,
    getNewId,
} = playerSlice.actions;

export default playerSlice.reducer;
