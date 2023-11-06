const playerSelector = (store) => store.player;

export const playerAllTracksSelector = (store) =>
    playerSelector(store)?.allTracks || [];
export const playerCategoryTracksSelector = (store) =>
    playerSelector(store)?.categoryTracks || [];
export const playerPlaylistSelector = (store) =>
    playerSelector(store)?.playlist || [];
export const playerShuffledPlaylistSelector = (store) =>
    playerSelector(store)?.shuffledPlaylist || [];
export const playerIsLoopSelector = (store) => playerSelector(store).isLoop;
export const playerIsPausedSelector = (store) => playerSelector(store).isPaused;
export const playerCurrentTrackSelector = (store) =>
    playerSelector(store)?.currentTrack || null;
export const playerIsShuffledSelector = (store) =>
    playerSelector(store).isShuffled;
export const playerNextIdSelector = (store) =>
    playerSelector(store)?.nextId || null;
export const playerPrevIdSelector = (store) =>
    playerSelector(store)?.prevId || null;
export const playerDurationSelector = (store) =>
    playerSelector(store)?.duration || 190;
export const playerVolumeSelector = (store) =>
    playerSelector(store)?.volume || 40;
export const playerCurrentTimeSelector = (store) =>
    playerSelector(store)?.currentTime || 0;
export const playerChangedCurrentTimeSelector = (store) =>
    playerSelector(store)?.changedCurrentTime || null;
