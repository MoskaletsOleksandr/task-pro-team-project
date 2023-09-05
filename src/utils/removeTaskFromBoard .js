// export const removeTaskFromBoard = (board, task) => {
//   const columnId = task.columnId;

//   const column = board.columns.find(col => col._id === columnId);
//   column.tasks = column.tasks.filter(t => t._id !== task._id);

//   return board;
// };

// without mutation

export const removeTaskFromBoard = (board, task) => {
  const columnId = task.columnId;

  const updatedBoard = JSON.parse(JSON.stringify(board));

  const columnIndex = updatedBoard.columns.findIndex(
    col => col._id === columnId
  );

  if (columnIndex !== -1) {
    const column = updatedBoard.columns[columnIndex];
    column.tasks = column.tasks.filter(t => t._id !== task._id);
  } else {
    console.error(`Column with ID ${columnId} not found.`);
  }

  return updatedBoard;
};

