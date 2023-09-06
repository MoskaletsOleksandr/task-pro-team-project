export const deleteColumnFromBoard = (board, deletedColumn) => {
  const updatedBoard = JSON.parse(JSON.stringify(board));

  updatedBoard.columns = updatedBoard.columns.filter(
    column => column._id !== deletedColumn._id
  );

  return updatedBoard;
};
