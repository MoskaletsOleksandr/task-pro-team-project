import { createSlice } from '@reduxjs/toolkit';
import { SignUpThunk, SignInThunk, GetThemeThunk, LogOutThunk } from './thunks';
import {
  handleGetThemeFulfilled,
  handleGetThemePending,
  handleGetThemeRejected,
  handleLogOutFulfilled,
  handleLogOutPending,
  handleLogOutRejected,
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
  // theme: '',
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
      .addCase(LogOutThunk.fulfilled, handleLogOutFulfilled)
      .addCase(LogOutThunk.pending, handleLogOutPending)
      .addCase(LogOutThunk.rejected, handleLogOutRejected)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handleThunkPending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleThunkRejected);
  },
});

export const authReducer = authSlice.reducer;
