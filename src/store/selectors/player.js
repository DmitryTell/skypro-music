import { createSelector } from "reselect";

const playerSelector = (store) => store.player;

const getAllTracks = (store) => playerSelector(store).allTracks;
const getShuffledTracks = (store) => playerSelector(store).shuffledTracks;
const playerNextIdSelector = (store) => playerSelector(store)?.nextId || null;
const playerPrevIdSelector = (store) => playerSelector(store)?.prevId || null;

export const playerTracksIdsSelector = createSelector(
    getAllTracks,
    (allTracks) => allTracks.map((track) => track.id),
);
export const playerShuffledTracksIdsSelector = createSelector(
    getShuffledTracks,
    (shuffledTracks) => shuffledTracks.map((track) => track.id),
);
export const playerAllTracksSelector = (store) =>
    playerSelector(store)?.allTracks || [];
export const playerShuffledTracksSelector = (store) =>
    playerSelector(store)?.shuffledTracks || [];
export const playerIsLoopSelector = (store) => playerSelector(store).isLoop;
export const playerIsPausedSelector = (store) => playerSelector(store).isPaused;
export const playerCurrentTrackSelector = (store) =>
    playerSelector(store)?.currentTrack || null;
export const playerIsShuffledSelector = (store) =>
    playerSelector(store).isShuffled;
export const playerNextTrackSelector = (store) => {
    const nextId = playerNextIdSelector(store);
    const currentList = playerAllTracksSelector(store);

    if (!nextId) {
        return null;
    }

    const nextTrack = { ...currentList.find((track) => track.id === nextId) };
    return nextTrack;
};
export const playerPrevTrackSelector = (store) => {
    const prevId = playerPrevIdSelector(store);
    const currentList = playerAllTracksSelector(store);

    if (!prevId) {
        return null;
    }

    const prevTrack = { ...currentList.find((track) => track.id === prevId) };
    return prevTrack;
};
