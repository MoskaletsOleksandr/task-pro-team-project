import { configureStore } from '@reduxjs/toolkit';
// import { setToken } from 'api/axiosConfig';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { reducer } from './reducer';
import { authReducer } from './authSlice';
import { boardsReducer } from './dashboards/slise';

const authPersistConfigs={
  key:'auth',
  storage,
  whiteList:['token', 'user']
}

export const store = configureStore({
  reducer:{
    auth:persistReducer(authPersistConfig, authReducer),
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
