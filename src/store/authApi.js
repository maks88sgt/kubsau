import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    singin: builder.mutation({
      query: ({ username, password }) => ({
        url: `/Account/Login?loginPair=${username}:${password}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useSinginMutation } = authApi;
