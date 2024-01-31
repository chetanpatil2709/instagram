"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<void, ICredentialSchema>({
            query: (credentials) => {
                return {
                    url: 'user/register',
                    method: 'POST',
                    body: credentials,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            }
        }),
        getUser: builder.query({
            query: () => {
                return {
                    url: 'user',
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            }
        })
    })
})

export const { useRegisterUserMutation, useGetUserQuery } = authAPI