import type { RootState } from '../store';


export const getStateAuth = (state: RootState) => state.auth;
export const getStateUser = (state: RootState) => state.user;
export const getStateMenu = (state: RootState) => state.menu;
export const getStateFilters = (state: RootState) => state.filters;
export const getStatePlaylist = (state: RootState) => state.playlist;
