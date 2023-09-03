import { toast } from 'react-hot-toast';

export const updateTask = (board, task) => {
  try {
    const columnId = task.columnId;
    const taskId = task._id;

    const updatedBoard = JSON.parse(JSON.stringify(board));

    const column = updatedBoard.columns.find(col => col._id === columnId);

    if (column) {
      const taskIndex = column.tasks.findIndex(t => t._id === taskId);

      if (taskIndex !== -1) {
        column.tasks.splice(taskIndex, 1);

        column.tasks.push(task);

        toast.success('Task updated successfully on the board.');
      } else {
        throw new Error(`Task with ID ${taskId} not found in column.`);
      }
    } else {
      throw new Error(`Column with ID ${columnId} not found.`);
    }

    return updatedBoard;
  } catch (error) {
    toast.error('Error updating task on the board.');
    return board;
  }
};
