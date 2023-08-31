import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { boardsReducer } from './dashboards/slise';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedReducer,
  boards: boardsReducer,
});
