export const handleSignUpThunkFullfilled = (state, { payload }) => {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};
export const handleThunkPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn = false;
};
export const handleThunkRejected = (state, { error, payload }) => {
  state.error = error ? error.message : payload;
  state.isLoading = false;
};
export const handleSignInFulfilled = (state, { payload }) => {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

export const handleLogOutFulfilled = (state, { payload }) => {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoading = false;
  state.user = null;
  state.isLoggedIn = false;
};
export const handleLogOutPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
};
export const handleLogOutRejected = (state, { error, payload }) => {
  state.error = error ? error.message : payload;
  state.isLoading = false;
};
export const handleUpdateThemeFulfilled = (state, { payload }) => {
  state.user.theme = payload.theme;
  state.isLoading = false;
};
export const handleUpdateThemePending = (state, { payload }) => {
  state.error = null;
  state.isLoading = true;
};

export const handleUpdateThemeRejected = (state, { error, payload }) => {
  state.error = error ? error.message : payload;
  state.isLoading = false;
};

export const handleSendLetterThunkFulfilled = (state, { payload }) => {
  state.sentLetter = true;
  state.isLoading = false;
};

export const handleSendLetterThunkPending = (state, { payload }) => {
  state.sentLetter = false;
  state.isLoading = true;
};

export const handleSendLetterThunkRejected = (state, { error, payload }) => {
  state.error = error ? error.message : payload;
  state.isLoading = false;
};

export const handleGetCurrentUserThunkFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleGetCurrentUserThunkPending = (state, { payload }) => {
  state.isLoading = true;
  state.isLoggedIn = false;
  state.isRefreshing = true;
};

export const handleGetCurrentUserThunkRejected = (
  state,
  { error, payload }
) => {
  state.error = error ? error.message : payload;
  state.isLoading = false;
  state.isRefreshing = false;
};

export const handlerUserUpdatePhoto = (state, { payload }) => {
  state.user = payload.user;
};

export const handlerUserUpdate = (state, { payload }) => {
  state.user = payload.user;
};
