import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  signUp,
  login,
  logOut,
  sendHelpLetter,
  getCurrentUser,
  updateUser,
  updateTheme,
  // updateUserPhoto
} from 'api/api_auth/api';
import { authInstance, setToken } from 'api/axiosConfig';
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

export const UpdateThemeThunk = createAsyncThunk(
  'boards/updateTheme',
  async (theme, { rejectWithValue }) => {
    try {
      const data = await updateTheme(theme);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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

export const UpdateUserPhotoThunk = createAsyncThunk(
  'auth/updateUserPhoto',
  async (imageFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('photo', imageFile);
      const { data } = await authInstance.patch('users/photo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UpdateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async ({ userData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(userData);

      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
