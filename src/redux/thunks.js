import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, login, getTheme, logOut, sendHelpLetter } from 'api/api_auth/api';



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
    // const state = thunkAPI.getState();
    // const currentToken = state.auth.token;

    // if (currentToken === '') {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      const data = await logOut();
      return data;
    } catch (error) {
      // selectToken(`Bearer ${currentToken}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const GetThemeThunk = createAsyncThunk(
  'auth/theme',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    const id = state.auth.user.id;
    if (currentToken === '' || !id) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await getTheme(body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const SendLetterThunk=createAsyncThunk('user/sendLetter',async(body,thunkAPI)=>{
  const state = thunkAPI.getState();
  const currentToken = state.auth.token;
  
  if (currentToken === '') {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
   
    const data = await sendHelpLetter(body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
)