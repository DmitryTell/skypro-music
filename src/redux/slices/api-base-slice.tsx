import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { setNewToken, removeAuthData } from './auth';
import { type RootState } from '../store';

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';


interface IRefreshAuthData {
  access: string;
  refresh: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
FetchArgs | string,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const { refresh } = (api.getState() as RootState).auth;

    const resultRefreshToken = await baseQuery({
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh,
      },
    }, api, extraOptions);

    if (resultRefreshToken) {
      api.dispatch(setNewToken({
        token: {
          ...resultRefreshToken.data as IRefreshAuthData,
          isAuth: true,
        },
      }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeAuthData());
    }
  }

  return result;
};

export const apiBaseSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Tracks'],
});
