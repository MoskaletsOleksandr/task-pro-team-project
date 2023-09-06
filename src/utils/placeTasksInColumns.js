export const placeTasksInColumns = (board, tasks) => {
  const updatedBoard = JSON.parse(JSON.stringify(board));

  const columnTasksMap = {};
  updatedBoard.columns.forEach(column => {
    columnTasksMap[column._id] = [];
  });

  tasks.forEach(task => {
    if (columnTasksMap.hasOwnProperty(task.columnId)) {
      columnTasksMap[task.columnId].push(task);
    }
  });

  updatedBoard.columns.forEach(column => {
    column.tasks = columnTasksMap[column._id];
  });

  return updatedBoard;
};
