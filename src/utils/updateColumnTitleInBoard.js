import { toast } from 'react-hot-toast';

export const updateColumnTitleInBoard = (board, updatedColumn) => {
  try {
    const updatedBoard = JSON.parse(JSON.stringify(board));

    const columnIndex = updatedBoard.columns.findIndex(
      column => column._id === updatedColumn._id
    );

    if (columnIndex !== -1) {
      updatedBoard.columns[columnIndex].title = updatedColumn.title;
      toast.success('Column title updated successfully');
    } else {
      throw new Error(`Column with ID ${updatedColumn._id} not found`);
    }

    return updatedBoard;
  } catch (error) {
    toast.error('Error updating column title');
    return board;
  }
};
