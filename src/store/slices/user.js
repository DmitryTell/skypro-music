import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access: null,
    refresh: null,
    newError: null,
    isMenu: false,
};

export const userSlice = createSlice({
    name: "user",
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
    },
});
export const { setToken, setNewError, setIsMenu } = userSlice.actions;

export default userSlice.reducer;
