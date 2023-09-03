import { toast } from "react-hot-toast";
// export const placeTasksInColumns = (board, tasks) => {
//   const columnTasksMap = {};
//   тут мутація
//   board.columns.forEach(column => {
//     columnTasksMap[column._id] = [];
//   });

//   tasks.forEach(task => {
//     if (columnTasksMap.hasOwnProperty(task.columnId)) {
//       columnTasksMap[task.columnId].push(task);
//     }
//   });

//   board.columns.forEach(column => {
//     column.tasks = columnTasksMap[column._id];
//   });

//   return board;
// };

// оновлений без мутації

// export const placeTasksInColumns = (board, tasks) => {
//   const updatedBoard = JSON.parse(JSON.stringify(board));

//   const columnTasksMap = {};
//   updatedBoard.columns.forEach(column => {
//     columnTasksMap[column._id] = [];
//   });

//   tasks.forEach(task => {
//     if (columnTasksMap.hasOwnProperty(task.columnId)) {
//       columnTasksMap[task.columnId].push(task);
//     }
//   });

//   updatedBoard.columns.forEach(column => {
//     column.tasks = columnTasksMap[column._id];
//   });

//   return updatedBoard;
// };

export const placeTasksInColumns = (board, tasks) => {
  try {
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

    toast.success('Tasks placed successfully in the columns');
    return updatedBoard;
  } catch (error) {
    toast.error('Error placing tasks in the columns');
    return board;
  }
};