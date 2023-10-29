import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access: null,
    refresh: null,
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action) => {
            const { access, refresh } = action.payload;

            state.access = access;
            state.refresh = refresh;
        },
    },
});
export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
