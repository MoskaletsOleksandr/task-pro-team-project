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
  const response = await authInstance.put('users/update', body);
  return response.data;
};

// export const updateUserPhoto = async (imageFile) => {
//   console.log(imageFile)
//   const response = await authInstance.patch('users/photo', imageFile);

//   return response.data
// }

//theme

export const updateTheme = async theme => {
  const response = await authInstance.patch(`users/theme`, theme);
  return response.data;
};

// help letter

export const sendHelpLetter = async body => {
  const response = await authInstance.post('/users/letter', body);
  return response.data;
};
