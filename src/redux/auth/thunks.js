import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  signUp,
  login,
  getTheme,
  logOut,
  sendHelpLetter,
  getCurrentUser,
  updateUser,
} from 'api/api_auth/api';
import { setToken } from 'api/axiosConfig';
import { resetBoards } from 'redux/dashboards/slise';

export const SignUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const SignInThunk = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.accessToken;

    if (currentToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(`Bearer ${currentToken}`);
      const { data } = await logOut();
      localStorage.removeItem('persist:boards');
      thunkAPI.dispatch(resetBoards());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const GetThemeThunk = createAsyncThunk(
  'auth/theme',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.accessToken;
    const id = state.auth.user.id;
    if (currentToken === '' || !id) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(`Bearer ${currentToken}`);
      const response = await getTheme(body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const UpdateThemeThunk = createAsyncThunk(
  'auth/updateTheme',
  async (theme, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.accessToken;
    const id = state.auth.user.id;

    if (currentToken === '' || !id) {
      return thunkAPI.rejectWithValue('Unable to update theme');
    }

    try {
      setToken(`Bearer ${currentToken}`);
      const response = await getTheme({ theme });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const SendLetterThunk = createAsyncThunk(
  'user/sendLetter',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.accessToken;

    if (currentToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(`Bearer ${currentToken}`);
      const { data } = await sendHelpLetter(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const GetCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.accessToken;
    const currentEmail = state.auth.user.email;

    if (currentToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(`Bearer ${currentToken}`);
      const { data } = await getCurrentUser(currentEmail);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const UpdateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(id, userData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
