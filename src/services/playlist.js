import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../store/selectors/token";

const DATA_TAG = { type: "Playlist", id: "LIST" };

export const playlistApi = createApi({
    reducerPath: "playlistApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/",
        prepareHeaders: (headers, { getState }) => {
            const token = selectToken(getState());

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => "track/all/",
            providesTags: (result = []) => [
                ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
                DATA_TAG,
            ],
        }),
        likeTrack: builder.mutation({
            query: (data) => {
                const { id, isLiked } = data;

                return {
                    url: `track/${id}/favorite/`,
                    method: `${isLiked ? "DELETE" : "POST"}`,
                };
            },
            invalidatesTags: (post) => [{ type: DATA_TAG.type, id: post?.id }],
        }),
        getAllFavouriteTracks: builder.query({
            query: () => "track/favorite/all/",
            invalidatesTags: [DATA_TAG],
        }),
    }),
    onError: (error) => {
        throw new Error(error.response.data);
    },
});

export const {
    useGetAllTracksQuery,
    useLikeTrackMutation,
    useGetAllFavouriteTracksQuery,
} = playlistApi;
