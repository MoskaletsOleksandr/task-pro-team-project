import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { boardsReducer } from './dashboards/slise';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const boardsPersistConfig = {
  key: 'boards',
  storage,
  whitelist: ['currentBoard'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedBoardsReducer = persistReducer(
  boardsPersistConfig,
  boardsReducer
);

export const reducer = combineReducers({
  auth: persistedAuthReducer,
  boards: persistedBoardsReducer,
});
