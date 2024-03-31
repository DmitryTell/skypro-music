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

const baseQueryWithReauth: BaseQueryFn<
FetchArgs | string,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
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

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    api.dispatch(removeAuthData());
    window.location.replace('/login');
  };

  const { auth } = api.getState() as RootState;

  if (!auth.refresh) {
    forceLogout();

    return result;
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: { refresh: auth.refresh },
    },
    api,
    extraOptions,
  );

  const data = refreshResult.data as IRefreshAuthData;

  if (!data.access) {
    forceLogout();

    return refreshResult;
  }

  api.dispatch(setNewToken({
    token: {
      access: data.access,
      refresh: auth.refresh,
      isAuth: true,
    }
  }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    forceLogout();

    return retryResult;
  }

  return retryResult;
};

export const apiBaseSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Tracks'],
});
