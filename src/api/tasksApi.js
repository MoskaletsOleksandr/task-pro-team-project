import axios from 'axios';

axios.defaults.baseURL = '/tasks';

export const getAllTasks = async body => {
  const { data } = await axios.get('', body);
  return data;
};

export const createNewTask = async body => {
  const { data } = await axios.post('', body);
  return data;
};

export const updateTaskById = async (idTask, body) => {
  const { data } = await axios.put(`/${idTask}`, body);
  return data;
};

export const deleteTaskById = async idTask => {
  const { data } = await axios.delete(`/${idTask}`);
  return data;
};

export const updateTasksColumnById = async (idTask, body) => {
  const { data } = await axios.patch(`/${idTask}`, body);
  return data;
};
