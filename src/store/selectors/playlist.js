import { createSelector } from "reselect";

const playlistSelector = (store) => store.player;

const getAllTracks = (store) => playlistSelector(store).allTracks;
const getShuffledTracks = (store) => playlistSelector(store).shuffledTracks;
const playlistNextIdSelector = (store) =>
    playlistSelector(store)?.nextId || null;
const playlistPrevIdSelector = (store) =>
    playlistSelector(store)?.prevId || null;

export const playlistTracksIdsSelector = createSelector(
    getAllTracks,
    (allTracks) => allTracks.map((track) => track.id),
);
export const playlistShuffledTracksIdsSelector = createSelector(
    getShuffledTracks,
    (shuffledTracks) => shuffledTracks.map((track) => track.id),
);
export const playlistAllTracksSelector = (store) =>
    playlistSelector(store)?.allTracks || [];
export const playlistShuffledTracksSelector = (store) =>
    playlistSelector(store)?.shuffledTracks || [];
export const playlistIsLoopSelector = (store) => playlistSelector(store).isLoop;
export const playlistIsPausedSelector = (store) =>
    playlistSelector(store).isPaused;
export const playlistCurrentIdSelector = (store) =>
    playlistSelector(store)?.currentId || null;
export const playlistIsShuffledSelector = (store) =>
    playlistSelector(store).isShuffled;
export const playlistNextTrackSelector = (store) => {
    const nextId = playlistNextIdSelector(store);
    const allTracks = playlistAllTracksSelector(store);

    if (!nextId) {
        return null;
    }

    const nextTrack = { ...allTracks.find((track) => track.id === nextId) };
    return nextTrack;
};
export const playlistPrevTrackSelector = (store) => {
    const prevId = playlistPrevIdSelector(store);
    const allTracks = playlistAllTracksSelector(store);

    if (!prevId) {
        return null;
    }

    const prevTrack = { ...allTracks.find((track) => track.id === prevId) };
    return prevTrack;
};
