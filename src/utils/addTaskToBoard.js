import { toast } from 'react-hot-toast';

export const addTaskToBoard = (board, task) => {
  const columnId = task.columnId;

  const updatedBoard = JSON.parse(JSON.stringify(board));

  const column = updatedBoard.columns.find(col => col._id === columnId);

  if (!task.title) {
    toast.error('Task title is required');
    return updatedBoard;
  }

  column.tasks.push(task);

  return updatedBoard;
};
