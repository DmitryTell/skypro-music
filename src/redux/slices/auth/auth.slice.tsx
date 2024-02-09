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
    setNewUser(state, action: PayloadAction<{ token: IToken; user: IUser }>) {
      const { token, user } = action.payload;

      state.access = token.access;
      state.refresh = token.refresh;
      state.isAuth = token.isAuth;
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

export const { setNewUser, removeAuthData } = authSlice.actions;
