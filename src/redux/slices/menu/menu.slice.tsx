import { createSlice } from '@reduxjs/toolkit';


const MENU_DATA = 'menu-data';

interface IMenuState {
  isOpened: boolean;
  isDarkTheme: boolean;
}

const initialState: IMenuState = {
  isOpened: false,
  isDarkTheme: true,
};

const getMenuDataFromLocalStoreage = () => {
  const savedData = localStorage.getItem(MENU_DATA);
  const data = savedData ? JSON.parse(savedData) as IMenuState : initialState;

  return data;
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: getMenuDataFromLocalStoreage(),
  reducers: {
    setIsOpened(state) {
      state.isOpened = !state.isOpened;

      localStorage.setItem(MENU_DATA, JSON.stringify(state));
    },
    setIsDarkTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;

      localStorage.setItem(MENU_DATA, JSON.stringify(state));
    },
  },
});

export const { setIsOpened, setIsDarkTheme } = menuSlice.actions;
