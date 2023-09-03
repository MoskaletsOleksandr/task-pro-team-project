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
