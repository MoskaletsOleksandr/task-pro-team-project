import { dashBoardsInstance } from '../axiosConfig';

export const getFilteredTasks = async body => {
  const { data } = await dashBoardsInstance.get('', body);
  return data;
};
