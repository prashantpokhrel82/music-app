import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://shazam-core.p.rapidapi.com`,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `/v1/charts/world` }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/v2/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
