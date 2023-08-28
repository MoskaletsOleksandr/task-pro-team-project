export const removeTaskFromBoard = (board, task) => {
  const columnId = task.columnId;

  const column = board.columns.find(col => col._id === columnId);
  column.tasks = column.tasks.filter(t => t._id !== task._id);

  return board;
};
