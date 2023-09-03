import { toast } from "react-hot-toast";
// export const removeTaskFromBoard = (board, task) => {
//   const columnId = task.columnId;

//   const column = board.columns.find(col => col._id === columnId);
//   column.tasks = column.tasks.filter(t => t._id !== task._id);

//   return board;
// };

// without mutation

// export const removeTaskFromBoard = (board, task) => {
//   const columnId = task.columnId;

//   const updatedBoard = JSON.parse(JSON.stringify(board));

//   const columnIndex = updatedBoard.columns.findIndex(
//     col => col._id === columnId
//   );

//   if (columnIndex !== -1) {
//     const column = updatedBoard.columns[columnIndex];
//     column.tasks = column.tasks.filter(t => t._id !== task._id);
//   } else {
//     console.error(`Column with ID ${columnId} not found.`);
//   }

//   return updatedBoard;
// };

export const removeTaskFromBoard = (board, task) => {
  try {
    const columnId = task.columnId;

    const updatedBoard = JSON.parse(JSON.stringify(board));

    const columnIndex = updatedBoard.columns.findIndex(
      col => col._id === columnId
    );

    if (columnIndex !== -1) {
      const column = updatedBoard.columns[columnIndex];
      column.tasks = column.tasks.filter(t => t._id !== task._id);
      toast.success('Task removed successfully from the board.');
    } else {
      throw new Error(`Column with ID ${columnId} not found.`);
    }

    return updatedBoard;
  } catch (error) {
    toast.error('Error removing task from the board.');
    return board;
  }
};