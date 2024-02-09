import type { RootState } from '../store';


export const getStateAuth = (state: RootState) => state.auth;
export const getStateMenu = (state: RootState) => state.menu;
