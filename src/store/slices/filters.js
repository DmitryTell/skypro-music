import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchingText: null,
    authors: [],
    genres: [],
    year: "По умолчанию",
    filteredTracks: null,
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            const { text } = action.payload;

            state.searchingText = text;
        },
        setAuthor: (state, action) => {
            const { author, is } = action.payload;

            if (!is) {
                state.authors.push(author);
            } else {
                const authorIndex = state.authors.indexOf(author);

                state.authors.splice(authorIndex, 1);
            }
        },
        setGenre: (state, action) => {
            const { genre, is } = action.payload;

            if (!is) {
                state.genres.push(genre);
            } else {
                const genreIndex = state.genres.indexOf(genre);

                state.genres.splice(genreIndex, 1);
            }
        },
        setYear: (state, action) => {
            const { year } = action.payload;

            if (state.year === year) {
                state.year = "По умолчанию";
            } else {
                state.year = year;
            }
        },
        searchTrack: (state, action) => {
            const { tracks, searchingText } = action.payload;

            if (!searchingText) {
                state.filteredTracks = null;
            } else {
                const searchingTextReg = new RegExp(`${searchingText}`, "gi");

                state.filteredTracks = [];

                tracks.forEach((track) => {
                    if (searchingTextReg.test(track.name)) {
                        state.filteredTracks.push(track);
                    }
                });
            }
        },
        filterTracks: (state, action) => {
            const { tracks, authors, genres } = action.payload;

            state.filteredTracks = [];

            if (authors?.length && genres?.length) {
                tracks.forEach((track) => {
                    if (
                        authors?.includes(track.author) &&
                        genres?.includes(track.genre)
                    ) {
                        state.filteredTracks.push(track);
                    }
                });
            } else if (authors?.length && !genres?.length) {
                tracks.forEach((track) => {
                    if (authors?.includes(track.author)) {
                        state.filteredTracks.push(track);
                    }
                });
            } else if (!authors?.length && genres?.length) {
                tracks.forEach((track) => {
                    if (genres?.includes(track.genre)) {
                        state.filteredTracks.push(track);
                    }
                });
            } else {
                state.filteredTracks = null;
            }
        },
        sortTracks: (state, action) => {
            const { tracks, year } = action.payload;

            if (year === "Сначала новые") {
                state.filteredTracks = [
                    ...[...tracks].sort((a, b) => {
                        const firstDate = a.release_date
                            ? a.release_date.split("-")[0]
                            : "1900";
                        const secondDate = b.release_date
                            ? b.release_date.split("-")[0]
                            : "1900";

                        return secondDate - firstDate;
                    }),
                ];
            } else if (year === "Сначала старые") {
                state.filteredTracks = [
                    ...[...tracks].sort((a, b) => {
                        const firstDate = a.release_date
                            ? a.release_date.split("-")[0]
                            : "1900";
                        const secondDate = b.release_date
                            ? b.release_date.split("-")[0]
                            : "1900";

                        return firstDate - secondDate;
                    }),
                ];
            } else {
                state.filteredTracks = null;
            }
        },
    },
});

export const {
    setSearchText,
    setAuthor,
    setGenre,
    setYear,
    searchTrack,
    filterTracks,
    sortTracks,
} = filtersSlice.actions;

export default filtersSlice.reducer;
