import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import { persistStore } from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './authSlice';
import { boardsReducer } from './dashboards/slise';

const authPersistConfigs={
  key:'auth',
  storage,
  whiteList:['token', 'user']
}

export const store = configureStore({
  reducer:{
    auth:persistReducer(authPersistConfigs, authReducer),
    boards:boardsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const persistor = persistStore(store, null, () => {
//   const token = store.getState().auth.token;
//   console.log('token:', token);
//   if (token) {
//     setToken(`Bearer ${token}`);
//   }
//   return;
// });
