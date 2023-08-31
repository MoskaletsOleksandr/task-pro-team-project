import { authInstance, clearToken, setToken } from 'api/axiosConfig';

export const signUp = async body => {
  const response = await authInstance.post('users/register', body);
  setToken(`Bearer ${response.data.token}`);
  return response.data;
};

export const login = async body => {
  const response = await authInstance.post('users/login', body);
  setToken(`Bearer ${response.data.token}`);
  return response.data;
};

export const logOut = async () => {
  const response = await authInstance.post('users/logout');
  clearToken();
  return response;
};

export const getCurrentUser = async body => {
  const response = await authInstance.get('users/current');
  return response;
};

//theme
export const getTheme = async body => {
  const response = await authInstance.patch('users/{id}/theme', body);
  return response.data;
};

// help letter

export const sendHelpLetter = async body => {
  const response = await authInstance.post('/users/letter', body);
  return response.data;
};
