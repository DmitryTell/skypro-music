import { ITrack } from '@interface/';

import { apiBaseSlice } from '../api-base-slice';


export const playlistApi = apiBaseSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query<ITrack[], void>({
      query: () => '/catalog/track/all/',
      providesTags: ['Tracks'],
    }),
    likeTrack: builder.mutation({
      query: ({ id, isLiked }: { id: number; isLiked: boolean }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: isLiked ? 'DELETE' : 'POST',
      }),
      invalidatesTags: ['Tracks'],
    }),
    getAllFavouriteTracks: builder.query<ITrack[], void>({
      query: () => '/catalog/track/favorite/all/',
      providesTags: ['Tracks'],
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useLikeTrackMutation,
  useGetAllFavouriteTracksQuery,
} = playlistApi;
