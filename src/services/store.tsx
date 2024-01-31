"use server";
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authAPI } from './Auth'

export const store = configureStore({
    reducer: {
        [authAPI.reducerPath]: authAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authAPI.middleware)

})

setupListeners(store.dispatch)