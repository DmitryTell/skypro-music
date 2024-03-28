import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrack } from '@interface/';


interface IPlaylistState {
  isFirstLoading: boolean;
  currentTrack: ITrack | null;
  currentPlaylist: ITrack[] | [];
  isPlaying: boolean;
  isLoop: boolean;
  isShuffled: boolean;
  duration: number;
  currentTime: number;
  changedCurrentTime: number | null;
  volume: number;
}

const initialState: IPlaylistState = {
  isFirstLoading: false,
  currentTrack: null,
  currentPlaylist: [],
  isPlaying: false,
  isLoop: false,
  isShuffled: false,
  duration: 190,
  currentTime: 0,
  changedCurrentTime: null,
  volume: 25,
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
    setIsShuffled(state) {
      state.isShuffled = !state.isShuffled;
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
} = playlistSlice.actions;
