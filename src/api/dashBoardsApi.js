import axios from 'axios';

axios.defaults.baseURL = '/boards';

export const getAllBoards = async () => {
  const { data } = await axios.get('');
  return data;
};

export const getCurrentBoard = async id => {
  const { data } = await axios.get(`/${id}`);
  return data;
};

export const createNewBoard = async body => {
  const { data } = await axios.post('', body);
  return data;
};

export const updateBoardById = async (id, body) => {
  const { data } = await axios.put(`/${id}`, body);
  return data;
};

export const deleteBoardById = async id => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};

export const createNewColumn = async (boardId, body) => {
  const { data } = await axios.post(`/${boardId}/columns`, body);
  return data;
};

export const updateColumnById = async (boardId, columnId, body) => {
  const { data } = await axios.patch(`/${boardId}/columns/${columnId}`, body);
  return data;
};

export const deleteColumnById = async (boardId, columnId) => {
  const { data } = await axios.delete(`/${boardId}/columns/${columnId}`);
  return data;
};
