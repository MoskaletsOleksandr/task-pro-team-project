import { createSlice } from '@reduxjs/toolkit';
import { addTaskToBoard } from 'utils/addTaskToBoard';
import { moveTaskBetweenColumns } from 'utils/moveTaskBetweenColumns';
import { placeTasksInColumns } from 'utils/placeTasksInColumns';
import { removeTaskFromBoard } from 'utils/removeTaskFromBoard ';
import { dashBoardsInitialState } from './initialState';
import {
  createNewBoardThunk,
  createNewColumnThunk,
  createNewTaskThunk,
  deleteBoardByIdThunk,
  deleteColumnByIdThunk,
  deleteTaskByIdThunk,
  getAllBoardsThunk,
  getAllTasksThunk,
  getCurrentBoardThunk,
  updateBoardByIdThunk,
  updateColumnByIdThunk,
  updateTaskByIdThunk,
  updateTasksColumnByIdThunk,
} from './thunks';

const handleGetAllBoardsFulfilled = (state, { payload }) => {
  state.boards = payload;
};

const handleGetCurrentBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleCreateNewBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleDeleteBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = null;
};

const handleCreateNewColumnFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
};

const handleGetAllTasksFulfilled = (state, { payload }) => {
  const updatedBoard = placeTasksInColumns(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
};

const handleCreateNewTaskFulfilled = (state, { payload }) => {
  const updatedBoard = addTaskToBoard(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
};

const handleUpdateTaskByIdFulfilled = (state, { payload }) => {
  const updatedBoard = addTaskToBoard(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
};

const handleDeleteTaskByIdFulfilled = (state, { payload }) => {
  const updatedBoard = removeTaskFromBoard(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
};

const handleUpdateTasksColumnByIdFulfilled = (state, { payload }) => {
  const updatedBoard = moveTaskBetweenColumns(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
};

const boardSlice = createSlice({
  name: 'boards',
  initialState: dashBoardsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllBoardsThunk.fulfilled, handleGetAllBoardsFulfilled)
      .addCase(getCurrentBoardThunk.fulfilled, handleGetCurrentBoardFulfilled)
      .addCase(createNewBoardThunk.fulfilled, handleCreateNewBoardFulfilled)
      .addCase(updateBoardByIdThunk.fulfilled, handleUpdateBoardByIdFulfilled)
      .addCase(deleteBoardByIdThunk.fulfilled, handleDeleteBoardByIdFulfilled)
      .addCase(createNewColumnThunk.fulfilled, handleCreateNewColumnFulfilled)
      .addCase(updateColumnByIdThunk.fulfilled, handleUpdateColumnByIdFulfilled)
      .addCase(deleteColumnByIdThunk.fulfilled, handleDeleteColumnByIdFulfilled)
      .addCase(getAllTasksThunk.fulfilled, handleGetAllTasksFulfilled)
      .addCase(createNewTaskThunk.fulfilled, handleCreateNewTaskFulfilled)
      .addCase(updateTaskByIdThunk.fulfilled, handleUpdateTaskByIdFulfilled)
      .addCase(deleteTaskByIdThunk.fulfilled, handleDeleteTaskByIdFulfilled)
      .addCase(
        updateTasksColumnByIdThunk.fulfilled,
        handleUpdateTasksColumnByIdFulfilled
      );
  },
});

export const boardsReducer = boardSlice.reducer;
