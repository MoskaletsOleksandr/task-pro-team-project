import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com',
});

export const dashBoardsInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com/boards',
});

export const tasksInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com/tasks',
});

//auth
export const setToken = accessToken => {
  authInstance.defaults.headers.common['Authorization'] = accessToken;
  dashBoardsInstance.defaults.headers.common['Authorization'] = accessToken;
  tasksInstance.defaults.headers.common['Authorization'] = accessToken;
};

export const clearToken = () => {
  authInstance.defaults.headers.common['Authorization'] = '';
  dashBoardsInstance.defaults.headers.common['Authorization'] = '';
  tasksInstance.defaults.headers.common['Authorization'] = '';
};

authInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await authInstance.post('users/refresh', {
        refreshToken,
      });
      console.log('====================================');
      console.log('data:', data);
      console.log('====================================');
      setToken(`Bearer ${data.accessToken}`);
      localStorage.setItem('refreshToken', data.refreshToken);
      return authInstance({
        ...error.config,
        headers: {
          ...error.config.headers,
          Authorization: `Bearer ${data.accessToken}`,
        },
      });
    }
    return Promise.reject(error);
  }
);
dashBoardsInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await authInstance.post('users/refresh', {
        refreshToken,
      });
      console.log('====================================');
      console.log('data:', data);
      console.log('====================================');
      setToken(`Bearer ${data.accessToken}`);
      localStorage.setItem('refreshToken', data.refreshToken);
      dashBoardsInstance({
        ...error.config,
        headers: {
          ...error.config.headers,
          Authorization: `Bearer ${data.accessToken}`,
        },
      });
    }
    return Promise.reject(error);
  }
);
tasksInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await authInstance.post('users/refresh', {
        refreshToken,
      });
      console.log('====================================');
      console.log('data:', data);
      console.log('====================================');
      setToken(`Bearer ${data.accessToken}`);
      localStorage.setItem('refreshToken', data.refreshToken);
      return tasksInstance({
        ...error.config,
        headers: {
          ...error.config.headers,
          Authorization: `Bearer ${data.accessToken}`,
        },
      });
    }
    return Promise.reject(error);
  }
);
