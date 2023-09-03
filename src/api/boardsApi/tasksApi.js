import { tasksInstance } from '../axiosConfig';

export const getAllTasks = async id => {
  const { data } = await tasksInstance.get(`/${id}`);
  return data;
};

export const createNewTask = async body => {
  const { data } = await tasksInstance.post('', body);
  return data;
};

export const updateTaskById = async (idTask, body) => {
  const { data } = await tasksInstance.put(`/${idTask}`, body);
  return data;
};

export const deleteTaskById = async idTask => {
  const { data } = await tasksInstance.delete(`/${idTask}`);
  return data;
};

export const updateTasksColumnById = async (idTask, body) => {
  const { data } = await tasksInstance.patch(`/${idTask}/move`, body);
  return data;
};

export const getFilteredTasks = async (boardId, priority) => {
  const { data } = await tasksInstance.get(`/${boardId}/${priority}`);
  return data;
};
