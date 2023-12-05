import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access: null,
    refresh: null,
    newError: null,
    isMenu: false,
    selectionList: [],
    categoryTitle: "",
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setToken: (state, action) => {
            const { access, refresh } = action.payload;

            state.access = access;
            state.refresh = refresh;
        },
        setNewError: (state, action) => {
            const { textError } = action.payload;

            state.newError = textError;
        },
        setIsMenu: (state) => {
            state.isMenu = !state.isMenu;
        },
        setSelectionList: (state, action) => {
            const { list } = action.payload;

            state.selectionList = [...list];
        },
        setCategoryTitle: (state, action) => {
            const { title } = action.payload;

            state.categoryTitle = title;
        },
    },
});
export const {
    setToken,
    setNewError,
    setIsMenu,
    setSelectionList,
    setCategoryTitle,
} = commonSlice.actions;

export default commonSlice.reducer;
