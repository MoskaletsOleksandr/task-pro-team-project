import { createSlice } from '@reduxjs/toolkit';
import { SignUpThunk, SignInThunk, GetThemeThunk } from './thunks';
import {
  handleGetThemeFulfilled,
  handleGetThemePending,
  handleGetThemeRejected,
  handleSignInFulfilled,
  handleSignUpThunkFullfilled,
  handleThunkPending,
  handleThunkRejected,
} from './handlers';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: {},
  theme: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(SignInThunk.fulfilled, handleSignInFulfilled)
      .addCase(GetThemeThunk.fulfilled, handleGetThemeFulfilled)
      .addCase(GetThemeThunk.pending, handleGetThemePending)
      .addCase(GetThemeThunk.rejected, handleGetThemeRejected)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handleThunkPending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleThunkRejected);
  },
});

export const authReducer = authSlice.reducer;
