import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://shazam-core.p.rapidapi.com/v1`,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7be5162f5bmshdf21395392bd32dp1130d8jsnca6425e803e8"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `charts/world` }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
