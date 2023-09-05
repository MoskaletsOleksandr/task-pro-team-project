import { createSlice } from '@reduxjs/toolkit';
import {
  SignUpThunk,
  SignInThunk,
  GetThemeThunk,
  LogOutThunk,
  SendLetterThunk,
  GetCurrentUserThunk,
} from './thunks';
import {
  handleGetCurrentUserThunkFulfilled,
  handleGetCurrentUserThunkPending,
  handleGetCurrentUserThunkRejected,
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
import { setToken } from 'api/axiosConfig';

const initialState = {
  isLoading: false,
  error: '',
  user: null,
  sentLetter: false,
  isLoggedIn: false,
  isRefreshing: false,
  accessToken: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addGoogleInfo(state, { payload }) {
      setToken(payload.accessToken);
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
      state.isLoggedIn = true;
    },
  },
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
      .addCase(
        GetCurrentUserThunk.fulfilled,
        handleGetCurrentUserThunkFulfilled
      )
      .addCase(GetCurrentUserThunk.pending, handleGetCurrentUserThunkPending)
      .addCase(GetCurrentUserThunk.rejected, handleGetCurrentUserThunkRejected)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handleThunkPending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleThunkRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { addGoogleInfo } = authSlice.actions;
