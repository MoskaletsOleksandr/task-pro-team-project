import { toast } from "react-hot-toast";

// export const deleteColumnFromBoard = (board, deletedColumn) => {
//   board.columns = board.columns.filter(column => column._id !== deletedColumn._id);

//   return board;
// };
// оновлений без мутації

// export const deleteColumnFromBoard = (board, deletedColumn) => {
//   const updatedBoard = JSON.parse(JSON.stringify(board));

//   updatedBoard.columns = updatedBoard.columns.filter(
//     column => column._id !== deletedColumn._id
//   );

//   return updatedBoard;
// };

export const deleteColumnFromBoard = (board, deletedColumn) => {
  try {
    const updatedBoard = JSON.parse(JSON.stringify(board));

    updatedBoard.columns = updatedBoard.columns.filter(
      column => column._id !== deletedColumn._id
    );

    toast.success('Column deleted successfully from the board.');
    return updatedBoard;
  } catch (error) {
    toast.error('Error deleting column from the board.');
    return board; // Повертаємо оригінальну дошку у випадку помилки.
  }
};