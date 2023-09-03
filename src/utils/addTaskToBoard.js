import { toast } from "react-hot-toast";

// export const addTaskToBoard = (board, task) => {
//   const columnId = task.columnId;

//   const column = board.columns.find(col => col._id === columnId);
//   column.tasks.push(task);

//   return board;
// };

// оновлений без мутації

// export const addTaskToBoard = (board, task) => {
//   const columnId = task.columnId;

//   const updatedBoard = JSON.parse(JSON.stringify(board));

//   const column = updatedBoard.columns.find(col => col._id === columnId);
//   column.tasks.push(task);

//   return updatedBoard;
// };

export const addTaskToBoard = (board, task) => {
  try {
    const columnId = task.columnId;

    const updatedBoard = JSON.parse(JSON.stringify(board));

    const column = updatedBoard.columns.find(col => col._id === columnId);

    if (column) {
      column.tasks.push(task);
      toast.success('Task added successfully to the board.');
    } else {
      throw new Error(`Column with ID ${columnId} not found.`);
    }

    return updatedBoard;
  } catch (error) {
    toast.error('Error adding task to the board.');
    return board; 
  }
};