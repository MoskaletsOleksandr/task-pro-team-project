export const addTaskToBoard = (board, task) => {
  const columnId = task.columnId;

  const column = board.columns.find(col => col._id === columnId);
  column.tasks.push(task);

  return board;
};
