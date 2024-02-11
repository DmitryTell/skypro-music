import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IToken } from '@interface/';


const AUTH_DATA = 'auth-data';

interface IAuthState {
  access: string | null;
  refresh: string | null;
  isAuth: boolean;
  userId: number | null;
  username: string | null;
}

const initialState: IAuthState = {
  access: null,
  refresh: null,
  isAuth: false,
  userId: null,
  username: null,
};

const getAuthDataFromLocalStoreage = () => {
  const savedData = localStorage.getItem(AUTH_DATA);
  const data = savedData ? JSON.parse(savedData) as IAuthState : initialState;

  return data;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthDataFromLocalStoreage(),
  reducers: {
    setNewToken(state, action: PayloadAction<{ token: IToken }>) {
      const { token } = action.payload;

      state.access = token.access;
      state.refresh = token.refresh;
      state.isAuth = token.isAuth;

      localStorage.setItem(AUTH_DATA, JSON.stringify(state));
    },
    setNewUser(state, action: PayloadAction<{ user: IUser }>) {
      const { user } = action.payload;

      state.userId = user.id;
      state.username = user.username;

      localStorage.setItem(AUTH_DATA, JSON.stringify(state));
    },
    removeAuthData(state) {
      state.access = null;
      state.refresh = null;
      state.isAuth = false;
      state.userId = null;
      state.username = null;

      localStorage.clear();
    },
  },
});

export const { setNewToken, setNewUser, removeAuthData } = authSlice.actions;
