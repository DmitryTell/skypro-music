import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: null,
    authorFilters: [],
    genreFilters: [],
    yearFilter: "По умолчанию",
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            const { text } = action.payload;

            state.searchText = text;
        },
        setAuthor: (state, action) => {
            const { author, is } = action.payload;

            if (!is) {
                state.authorFilters.push(author);
            } else {
                const authorIndex = state.authorFilters.indexOf(author);

                state.authorFilters.splice(authorIndex, 1);
            }
        },
        setGenre: (state, action) => {
            const { genre, is } = action.payload;

            if (!is) {
                state.genreFilters.push(genre);
            } else {
                const genreIndex = state.genreFilters.indexOf(genre);

                state.genreFilters.splice(genreIndex, 1);
            }
        },
        setYear: (state, action) => {
            const { year } = action.payload;

            if (state.yearFilter && state.yearFilter === year) {
                state.yearFilter = "По умолчанию";
            } else {
                state.yearFilter = year;
            }
        },
    },
});

export const { setSearchText, setAuthor, setGenre, setYear } =
    filtersSlice.actions;

export default filtersSlice.reducer;
