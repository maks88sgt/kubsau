import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi } from './authApi';
import { auth } from './authReducer';

const reducer = combineReducers({
  auth: auth.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
