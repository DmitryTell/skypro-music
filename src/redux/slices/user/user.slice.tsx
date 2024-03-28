import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@interface/';


const USER_DATA = 'user-data';

interface IUserState {
  userId: number | null;
  username: string | null;
  email: string;
}

const initialState: IUserState = {
  userId: null,
  username: null,
  email: '',
};

const getUserDataFromLocalStoreage = () => {
  const savedData = localStorage.getItem(USER_DATA);
  const data = savedData ? JSON.parse(savedData) as IUserState : initialState;

  return data;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserDataFromLocalStoreage(),
  reducers: {
    setNewUser(state, action: PayloadAction<{ user: IUser }>) {
      const { user } = action.payload;

      state.userId = user.id;
      state.username = user.username;
      state.email = user.email;

      localStorage.setItem(USER_DATA, JSON.stringify(state));
    },
    removeUserData(state) {
      state.userId = null;
      state.username = null;
      state.email = '';

      localStorage.removeItem(USER_DATA);
    }
  },
});

export const { setNewUser, removeUserData } = userSlice.actions;
