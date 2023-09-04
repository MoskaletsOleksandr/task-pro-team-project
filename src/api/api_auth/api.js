import { authInstance, clearToken, setToken } from 'api/axiosConfig';

export const signUp = async body => {
  const response = await authInstance.post('users/register', body);
  setToken(`Bearer ${response.data.accessToken}`);
  localStorage.setItem('refreshToken', response.data.refreshToken);
  return response.data;
};

export const login = async body => {
  const response = await authInstance.post('users/login', body);
  setToken(`Bearer ${response.data.accessToken}`);
  localStorage.setItem('refreshToken', response.data.refreshToken);
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

export const updateUser = async body => {
  const response = await authInstance.put('users/{id}/update', body);
  return response.data;
};

//theme
export const getTheme = async body => {
  const response = await authInstance.patch('users/{id}/theme', body);
  return response.data;
};

export const updateTheme = async (id, theme) => {
  const response = await authInstance.patch(`users/${id}/theme`, { theme });
  return response.data;
};

// help letter

export const sendHelpLetter = async body => {
  const response = await authInstance.post('/users/letter', body);
  return response.data;
};
