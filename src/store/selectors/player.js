// import { createSelector } from "reselect";

const playerSelector = (store) => store.player;

// const getAllTracks = (store) => playerSelector(store).allTracks;
// const getShuffledTracks = (store) => playerSelector(store).shuffledTracks;

// const playerTracksIdsSelector = createSelector(getAllTracks, (allTracks) =>
//     allTracks.map((track) => track.id),
// );
// const playerShuffledTracksIdsSelector = createSelector(
//     getShuffledTracks,
//     (shuffledtracks) => shuffledtracks.map((track) => track.id),
// );

export const playerAllTracksSelector = (store) =>
    playerSelector(store)?.allTracks || [];
export const playerIsLoopSelector = (store) => playerSelector(store).isLoop;
export const playerIsPausedSelector = (store) => playerSelector(store).isPaused;
export const playerCurrentIdSelector = (store) =>
    playerSelector(store)?.currentId || null;
export const playerISShuffledSelector = (store) =>
    playerSelector(store).isShuffled;
