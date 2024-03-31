import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrack } from '@interface/';


interface IPlaylistState {
  isFirstLoading: boolean;
  currentTrack: ITrack | null;
  currentPlaylist: ITrack[] | [];
  shuffledPlaylist: ITrack[] | [];
  isPlaying: boolean;
  isLoop: boolean;
  isShuffled: boolean;
  duration: number;
  currentTime: number;
  changedCurrentTime: number | null;
  volume: number;
  allTracks: ITrack[] | [];
}

const initialState: IPlaylistState = {
  isFirstLoading: false,
  currentTrack: null,
  currentPlaylist: [],
  shuffledPlaylist: [],
  isPlaying: false,
  isLoop: false,
  isShuffled: false,
  duration: 190,
  currentTime: 0,
  changedCurrentTime: null,
  volume: 25,
  allTracks: [],
};

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    clickToPlay(state, action: PayloadAction<{
      track: ITrack;
      playlist: ITrack[];
    }>) {
      const { track, playlist } = action.payload;

      state.currentTrack = track;
      state.currentPlaylist = playlist;
      state.isPlaying = true;
      state.isFirstLoading = true;
    },
    setIsFirstLoading(state) {
      state.isFirstLoading = false;
    },
    setIsPlaying(state, action: PayloadAction<{ isPlaying: boolean }>) {
      const { isPlaying } = action.payload;

      state.isPlaying = isPlaying;
    },
    setIsLoop(state) {
      state.isLoop = !state.isLoop;
    },
    setIsShuffled(state, action: PayloadAction<{ isShuffled: boolean; currentPlaylist: ITrack[] }>) {
      const { isShuffled, currentPlaylist } = action.payload;

      if (!isShuffled) {
        const currentPlaylistJson = currentPlaylist.map((track) => JSON.stringify(track));
        const shuffledPlaylistJson = currentPlaylistJson.sort(() => Math.random() - 0.5);
        const shuffledPlaylist = shuffledPlaylistJson.map((track) => JSON.parse(track));

        state.shuffledPlaylist = shuffledPlaylist;
      }

      state.isShuffled = !isShuffled;
    },
    setDuration(state, action: PayloadAction<{ duration: number }>) {
      const { duration } = action.payload;

      state.duration = duration;
    },
    setCurrentTime(state, action: PayloadAction<{ currentTime: number }>) {
      const { currentTime } = action.payload;

      state.currentTime = currentTime;
    },
    setChangedCurrentTime(state, action: PayloadAction<{ changedCurrentTime: number | null }>) {
      const { changedCurrentTime } = action.payload;

      state.changedCurrentTime = changedCurrentTime;
    },
    setVolume(state, action: PayloadAction<{ volume: number }>) {
      const { volume } = action.payload;

      state.volume = volume;
    },
    getNewTrack(state, action: PayloadAction<{ track: ITrack }>) {
      const { track } = action.payload;

      state.currentTrack = track;
      state.isPlaying = true;
    },
    setAllTracks(state, action: PayloadAction<{ tracks: ITrack[] }>) {
      const { tracks } = action.payload;

      state.allTracks = tracks;
    },
  },
});

export const {
  clickToPlay,
  setIsFirstLoading,
  setIsPlaying,
  setIsLoop,
  setIsShuffled,
  setDuration,
  setCurrentTime,
  setChangedCurrentTime,
  setVolume,
  getNewTrack,
  setAllTracks,
} = playlistSlice.actions;
