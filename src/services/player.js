import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playerApi = createApi({
    reducerPath: "playerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => "all/",
        }),
    }),
});

export const { useGetAllTracksQuery } = playerApi;
