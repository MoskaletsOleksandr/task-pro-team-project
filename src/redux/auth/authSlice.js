import { createSlice } from '@reduxjs/toolkit';
import {
  SignUpThunk,
  SignInThunk,
  LogOutThunk,
  SendLetterThunk,
  GetCurrentUserThunk,
  UpdateUserPhotoThunk,
  UpdateUserThunk,
  UpdateThemeThunk,
} from './thunks';
import {
  handleGetCurrentUserThunkFulfilled,
  handleGetCurrentUserThunkPending,
  handleGetCurrentUserThunkRejected,
  handleUpdateThemeFulfilled,
  handleUpdateThemePending,
  handleUpdateThemeRejected,
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
  handlerUserUpdate,
  handlerUserUpdatePhoto,
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
      .addCase(UpdateThemeThunk.fulfilled, handleUpdateThemeFulfilled)
      .addCase(UpdateThemeThunk.pending, handleUpdateThemePending)
      .addCase(UpdateThemeThunk.rejected, handleUpdateThemeRejected)
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
      .addCase(UpdateUserPhotoThunk.fulfilled, handlerUserUpdatePhoto)
      .addCase(UpdateUserThunk.fulfilled, handlerUserUpdate)
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
