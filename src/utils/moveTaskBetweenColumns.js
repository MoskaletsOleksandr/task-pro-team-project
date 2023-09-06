export const moveTaskBetweenColumns = (board, task) => {
  const { _id, columnId } = task;

  const updatedBoard = JSON.parse(JSON.stringify(board)); // Клонуємо об'єкт дошки

  const sourceColumnIndex = updatedBoard.columns.findIndex(column =>
    column.tasks.some(t => t._id === _id)
  );

  if (sourceColumnIndex !== -1) {
    const sourceColumn = updatedBoard.columns[sourceColumnIndex];
    sourceColumn.tasks = sourceColumn.tasks.filter(t => t._id !== _id);

    const targetColumnIndex = updatedBoard.columns.findIndex(
      col => col._id === columnId
    );

    if (targetColumnIndex !== -1) {
      const targetColumn = updatedBoard.columns[targetColumnIndex];
      targetColumn.tasks.push(task);
    } else {
      console.error(`Column with ID ${columnId} not found.`);
    }
  } else {
    console.error(`Task with ID ${_id} not found.`);
  }

  return updatedBoard; // Повертаємо оновлену копію об'єкта дошки
};
