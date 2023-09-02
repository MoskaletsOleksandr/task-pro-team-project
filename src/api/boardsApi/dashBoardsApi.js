import { dashBoardsInstance } from '../axiosConfig';

export const getAllBoards = async () => {
  const { data } = await dashBoardsInstance.get('');
  return data;
};

export const getCurrentBoard = async id => {
  const { data } = await dashBoardsInstance.get(`/${id}`);
  return data;
};

export const createNewBoard = async body => {
  const { data } = await dashBoardsInstance.post('', body);
  return data;
};

export const updateBoardById = async (id, body) => {
  const { data } = await dashBoardsInstance.put(`/${id}`, body);
  return data;
};

export const deleteBoardById = async id => {
  const { data } = await dashBoardsInstance.delete(`/${id}`);
  return data;
};

export const createNewColumn = async (boardId, body) => {
  const { data } = await dashBoardsInstance.post(`/${boardId}/columns`, body);
  return data;
};

export const updateColumnById = async (boardId, columnId, body) => {
  const { data } = await dashBoardsInstance.patch(
    `/${boardId}/columns/${columnId}`,
    body
  );
  return data;
};

export const deleteColumnById = async (boardId, columnId) => {
  const { data } = await dashBoardsInstance.delete(
    `/${boardId}/columns/${columnId}`
  );
  return data;
};

export const getAllBackgrounds = async () => {
  const { data } = await dashBoardsInstance.get(`/background`);
  return data;
};
