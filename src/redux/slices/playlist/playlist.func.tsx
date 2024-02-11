import { ITrack } from '@interface/';

import { apiBaseSlice } from '../api-base-slice';


export const playlistApi = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query<ITrack[], void>({
      query: () => '/catalog/track/all/',
      providesTags: ['Tracks'],
    }),
  }),
});

export const { useGetAllTracksQuery } = playlistApi;
