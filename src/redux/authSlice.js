import { createSlice } from '@reduxjs/toolkit';
import {
  SignUpThunk,
  SignInThunk,
  GetThemeThunk,
  LogOutThunk,
  SendLetterThunk,
} from './thunks';
import {
  handleGetThemeFulfilled,
  handleGetThemePending,
  handleGetThemeRejected,
  handleLogOutFulfilled,
  handleLogOutPending,
  handleLogOutRejected,
  handleSendLetterThunkFulfilled,
  handleSendLetterThunkPending,
  handleSendLetterThunkRejected,
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
  sentLetter: false,
  isLoggedIn: false,
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
      .addCase(SendLetterThunk.fulfilled, handleSendLetterThunkFulfilled)
      .addCase(SendLetterThunk.pending, handleSendLetterThunkPending)
      .addCase(SendLetterThunk.rejected, handleSendLetterThunkRejected)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handleThunkPending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleThunkRejected);
  },
});

export const authReducer = authSlice.reducer;
