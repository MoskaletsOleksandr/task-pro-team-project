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
export const setToken = token => {
  authInstance.defaults.headers.common['Authorization'] = token;
  dashBoardsInstance.defaults.headers.common['Authorization'] = token;
  tasksInstance.defaults.headers.common['Authorization'] = token;
};

export const clearToken = () => {
  authInstance.defaults.headers.common['Authorization'] = '';
  dashBoardsInstance.defaults.headers.common['Authorization'] = '';
  tasksInstance.defaults.headers.common['Authorization'] = '';
};
