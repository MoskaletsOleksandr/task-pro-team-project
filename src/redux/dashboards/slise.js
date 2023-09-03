import { createSlice } from '@reduxjs/toolkit';
import { addTaskToBoard } from 'utils/addTaskToBoard';
import { deleteColumnFromBoard } from 'utils/deleteColumnFromBoard';
import { moveTaskBetweenColumns } from 'utils/moveTaskBetweenColumns';
import { placeTasksInColumns } from 'utils/placeTasksInColumns';
import { removeTaskFromBoard } from 'utils/removeTaskFromBoard ';
import { updateColumnTitleInBoard } from 'utils/updateColumnTitleInBoard';
import { updateTask } from 'utils/updateTask';
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
  getFilteredTasksThunk,
  getAllBackgroundsThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleGetAllBoardsFulfilled = (state, { payload }) => {
  state.boards = payload;
};

const handleGetCurrentBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  //тут нічого не розподіляємо, це буде відпрацьовувати разом із запитом по таски
};

const handleCreateNewBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  // тут теж нічого не міняємо, бо ми тільки створили дошку, там немає тасок
};

const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
  const { title, icon, background } = payload;
  state.currentBoard = { ...state.currentBoard, title, icon, background };
};

const handleDeleteBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = null;
  // видаляємо дошку, тому тут нічого змінювати не треба
};

const handleCreateNewColumnFulfilled = (state, { payload }) => {
  state.currentBoard.columns.push(payload);
  // я з бекендом домовлюся, щоб вони нам повертали тільки об'єкт свтореної
  //колонки і ми його просто пушимо в масив колонок
};

const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
  const updatedBoard = updateColumnTitleInBoard(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
  //тут я додав функцію, яка перезаписує у колонки тільки Заголовок, бо тільки заголовок ми і
  //можемо змінити, при цьому вона не чіпає масиву тасок, тому все супер
};

const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
  const updatedBoard = deleteColumnFromBoard(state.currentBoard, payload);
  state.currentBoard = updatedBoard;
  //тут я додав функцію, яка видаляє колонку, яку ми отримуємо від бекенда,
  //при цьому вона не чіпає інших колонок, тому все супер
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
  const updatedBoard = updateTask(state.currentBoard, payload);
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

const handleGetAllBackgroundsFulfilled = (state, { payload }) => {
  state.backgrounds = payload;
};

const boardSlice = createSlice({
  name: 'boards',
  initialState: dashBoardsInitialState,
  reducers: {
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    resetBoards: state => {
      return dashBoardsInitialState;
    },
  },
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
      )
      .addCase(getFilteredTasksThunk.fulfilled, handleGetAllTasksFulfilled)
      .addCase(
        getAllBackgroundsThunk.fulfilled,
        handleGetAllBackgroundsFulfilled
      )
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { setPriority, resetBoards } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;
