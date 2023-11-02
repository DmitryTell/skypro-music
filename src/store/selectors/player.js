const playerSelector = (store) => store.player;

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
export const playerNextIdSelector = (store) =>
    playerSelector(store)?.nextId || null;
export const playerPrevIdSelector = (store) =>
    playerSelector(store)?.prevId || null;
