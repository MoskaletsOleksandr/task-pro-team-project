import { dashBoardsInstance } from '../axiosConfig';

axios.defaults.baseURL = '/tasks';

export const getFilteredTasks = async body => {
  const { data } = await dashBoardsInstance.get('', body);
  return data;
};
