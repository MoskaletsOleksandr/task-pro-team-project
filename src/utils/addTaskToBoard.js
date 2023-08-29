// export const addTaskToBoard = (board, task) => {
//   const columnId = task.columnId;

//   const column = board.columns.find(col => col._id === columnId);
//   column.tasks.push(task);

//   return board;
// };

// оновлений без мутації

export const addTaskToBoard = (board, task) => {
  const columnId = task.columnId;

  const updatedBoard = JSON.parse(JSON.stringify(board));

  const column = updatedBoard.columns.find(col => col._id === columnId);
  column.tasks.push(task);

  return updatedBoard;
};
