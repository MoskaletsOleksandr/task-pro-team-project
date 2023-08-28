export const handleSignUpThunkFullfilled = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
    state.isLoading = false;
    state.isLoggedIn = true;
  };
  export const handleThunkPending = (state, { payload }) => {
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
  };
  export const handleThunkRejected = (state, { error,payload }) => {
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
  };
  export const handleSignInFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
    state.isLoading = false;
    state.isLoggedIn = true;
  };
  export const handleGetThemeFulfilled=(state,{payload})=>{
    state.theme=payload.theme;
    state.isLoading = false;
  }
  export const handleGetThemePending=(state,{payload})=>{
    state.error=null;
    state.isLoading=true;
  }

  export const handleGetThemeRejected=(state,{error,payload})=>{
    state.error = error?error.message:payload;
    state.isLoading = false;
  }
 