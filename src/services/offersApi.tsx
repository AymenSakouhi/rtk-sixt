import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiData } from "../models/offers.model";

export const offersApi = createApi({
  reducerPath: "offersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cdn.sixt.io/codingtask/offers.json",
  }),
  endpoints: (builder) => ({
    offers: builder.query<apiData, void>({
      query: () => "",
    }),
  })
});

export const { useOffersQuery } = offersApi;
