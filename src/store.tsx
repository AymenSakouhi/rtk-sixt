import { configureStore } from "@reduxjs/toolkit";
import { offersApi } from "./services/offersApi";

export const store = configureStore({
    reducer : {
        [offersApi.reducerPath]: offersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(offersApi.middleware)
})