export const placeTasksInColumns = (board, tasks) => {
  const columnTasksMap = {};
  // тут мутація
  board.columns.forEach(column => {
    columnTasksMap[column._id] = [];
  });

  tasks.forEach(task => {
    if (columnTasksMap.hasOwnProperty(task.columnId)) {
      columnTasksMap[task.columnId].push(task);
    }
  });

  board.columns.forEach(column => {
    column.tasks = columnTasksMap[column._id];
  });

  return board;
};
