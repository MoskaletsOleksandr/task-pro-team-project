import { toast } from "react-hot-toast";

// export const updateColumnTitleInBoard = (board, updatedColumn) => {
//   const columnIndex = board.columns.findIndex(
//     column => column._id === updatedColumn._id
//   );

//   if (columnIndex !== -1) {
//     board.columns[columnIndex].title = updatedColumn.title;
//   } else {
//     console.error(`Column with ID ${updatedColumn._id} not found.`);
//   }

//   return board;
// };

// without mutation

export const updateColumnTitleInBoard = (board, updatedColumn) => {
  try {
    const updatedBoard = JSON.parse(JSON.stringify(board)); 

    const columnIndex = updatedBoard.columns.findIndex(
      column => column._id === updatedColumn._id
    );

    if (columnIndex !== -1) {
      if (!updatedColumn.title) {

        toast.error('Column title is required'); 
      } else {
        updatedBoard.columns[columnIndex].title = updatedColumn.title;
      }
    } else {
      toast.error('Column not found'); 
    }
  
    return updatedBoard; 

  } catch (error) {
    toast.error('Error updating column title'); 
    return board;
  }
};