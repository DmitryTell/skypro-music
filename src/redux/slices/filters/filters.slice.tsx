import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrack } from '@interface/';


interface IFiltersState {
  searchText: string;
  authors: string[] | [];
  genres: string[] | [];
  releaseDates: string [] | [];
  authorsFilter: string[] | [];
  genresFilter: string[] | [];
  dateFilter: string | null;
}

const initialState: IFiltersState = {
  searchText: '',
  authors: [],
  genres: [],
  releaseDates: [],
  authorsFilter: [],
  genresFilter: [],
  dateFilter: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<{ text: string }>) {
      const { text } = action.payload;

      state.searchText = text;
    },
    setAuthors(state, action: PayloadAction<{ tracks: ITrack[] }>) {
      const { tracks } = action.payload;
      const result = new Set(tracks.map((track) => track.author));

      state.authors = Array.from(result);
    },
    setGenres(state, action: PayloadAction<{ tracks: ITrack[] }>) {
      const { tracks } = action.payload;
      const result = new Set(tracks.map((track) => track.genre));

      state.genres = Array.from(result);
    },
    setReleaseDates(state, action: PayloadAction<{ tracks: ITrack[] }>) {
      const { tracks } = action.payload;
      const result = new Set(tracks.map((track) => track.release_date));

      state.releaseDates = Array.from(result);
    },
    setAuthorsFilter(state, action: PayloadAction<{ author: string; authorsFilter: string[] }>) {
      const { author, authorsFilter } = action.payload;

      if (!authorsFilter.includes(String(author))) {
        state.authorsFilter = [...state.authorsFilter, author];
      } else {
        const index = authorsFilter.indexOf(author);

        state.authorsFilter.splice(index, 1);
      }
    },
    setGenresFilter(state, action: PayloadAction<{ genre: string; genresFilter: string[] }>) {
      const { genre, genresFilter } = action.payload;

      if (!genresFilter.includes(String(genre))) {
        state.genresFilter = [...state.genresFilter, genre];
      } else {
        const index = genresFilter.indexOf(genre);

        state.genresFilter.splice(index, 1);
      }
    },
    setDateFilter(state, action: PayloadAction<{ dateFilter: string | null }>) {
      const { dateFilter } = action.payload;

      state.dateFilter = dateFilter;
    },
  },
});

export const {
  setSearchText,
  setAuthors,
  setGenres,
  setReleaseDates,
  setAuthorsFilter,
  setGenresFilter,
  setDateFilter,
} = filtersSlice.actions;
