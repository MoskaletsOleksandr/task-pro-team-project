import axios from "axios";

const instance = axios.create({
    baseURL: 'https://task-pro-group-1-backend.onrender.com',
  });

//auth
  export const setToken = token => {
    instance.defaults.headers.common['Authorization'] = token;
  };

  export const clearToken=()=>{
    instance.defaults.headers.common['Authorization'] = ''
  }

  export const signUp=async body=>{
    const response=await instance.post('users/register',body);
    setToken(`Bearer ${response.data.token}`);
    return response.data;
  }

  export const login = async body => {
    const response = await instance.post('users/login', body);
    setToken(`Bearer ${response.data.token}`);
    return response.data;
  };

  export const logOut = async () => {
    const response = await instance.post('users/logout');
    clearToken();
    return response;
  };

  //theme
  export const getTheme=async(body)=>{
    const response=await instance.patch('users/{id}/theme',body);
    return response.data;
  }