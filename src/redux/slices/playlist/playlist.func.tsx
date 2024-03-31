import { ITrack, ICategory } from '@interface/';

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
    getCategoryTracks: builder.query<ICategory, number>({
      query: (id) => `/catalog/selection/${id}/`,
      providesTags: ['Tracks'],
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useLikeTrackMutation,
  useGetAllFavouriteTracksQuery,
  useGetCategoryTracksQuery,
} = playlistApi;
