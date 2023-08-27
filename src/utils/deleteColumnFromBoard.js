export const deleteColumnFromBoard = (board, deletedColumn) => {
  board.columns = board.columns.filter(column => column._id !== deletedColumn._id);

  return board;
};
