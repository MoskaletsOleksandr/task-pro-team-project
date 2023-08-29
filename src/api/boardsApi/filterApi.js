import { boardsReducer } from './dashboards/slise';

axios.defaults.baseURL = '/tasks';

export const getFilteredTasks = async body => {
  const { data } = await axios.get('', body);
  return data;
};
