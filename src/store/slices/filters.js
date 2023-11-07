import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: null,
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            const { text } = action.payload;

            state.searchText = text;
        },
    },
});

export const { setSearchText } = filtersSlice.actions;

export default filtersSlice.reducer;
