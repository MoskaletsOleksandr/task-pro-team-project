export const updateColumnTitleInBoard = (board, updatedColumn) => {
  const columnIndex = board.columns.findIndex(
    column => column._id === updatedColumn._id
  );

  if (columnIndex !== -1) {
    board.columns[columnIndex].title = updatedColumn.title;
  } else {
    console.error(`Column with ID ${updatedColumn._id} not found.`);
  }

  return board;
};
