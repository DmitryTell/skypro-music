import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTracks: [],
    playlist: [],
    shuffledPlaylist: [],
    currentTrack: null,
    isLoop: false,
    isPaused: true,
    isShuffled: false,
    nextId: null,
    prevId: null,
    duration: 190,
    volume: 40,
    currentTime: 0,
    changedCurrentTime: null,
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        addAllTracks: (state, action) => {
            const { tracks } = action.payload;

            state.allTracks = [...tracks];
        },
        setNewPlaylist: (state, action) => {
            const { tracks, shuffledTracks } = action.payload;
            const tracksJson = [
                ...tracks.map((track) => JSON.stringify(track)),
            ];
            const shuffledTracksJson = [
                ...tracksJson.sort(() => Math.random() - 0.5),
            ];

            if (!shuffledTracks?.length) {
                state.shuffledPlaylist = [
                    ...shuffledTracksJson.map((track) => JSON.parse(track)),
                ];
            }

            state.playlist = [...tracks];
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
        setDuration: (state, action) => {
            const { duration } = action.payload;

            state.duration = duration;
        },
        setVolume: (state, action) => {
            const { value } = action.payload;

            state.volume = value;
        },
        setCurrentTime: (state, action) => {
            const { value } = action.payload;

            state.currentTime = value;
        },
        setNewCurrentTime: (state, action) => {
            const { value } = action.payload;

            state.changedCurrentTime = value;
        },
    },
});

export const {
    addAllTracks,
    setNewPlaylist,
    setNewError,
    toggleIsLoop,
    toggleIsPaused,
    setCurrentTrack,
    toggleIsShuffled,
    getNewId,
    setDuration,
    setVolume,
    setCurrentTime,
    setNewCurrentTime,
} = playerSlice.actions;

export default playerSlice.reducer;
