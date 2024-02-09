import { createSlice } from '@reduxjs/toolkit';


interface IMenuState {
  isOpened: boolean;
}

const initialState: IMenuState = {
  isOpened: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsOpened(state) {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { setIsOpened } = menuSlice.actions;
