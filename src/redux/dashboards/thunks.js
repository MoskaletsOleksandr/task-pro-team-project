import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoard,
  createNewColumn,
  deleteBoardById,
  deleteColumnById,
  getAllBoards,
  getCurrentBoard,
  updateBoardById,
  updateColumnById,
} from 'api/dashBoardsApi';
import {
  createNewTask,
  deleteTaskById,
  getAllTasks,
  updateTaskById,
  updateTasksColumnById,
} from 'api/tasksApi';

export const getAllBoardsThunk = createAsyncThunk(
  'boards/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllBoards();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentBoardThunk = createAsyncThunk(
  'boards/getCurrentBoard',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getCurrentBoard(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewBoardThunk = createAsyncThunk(
  'boards/createNewBoard',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await createNewBoard(body);
      dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBoardByIdThunk = createAsyncThunk(
  'boards/updateBoardById',
  async ({ id, body }, { rejectWithValue, dispatch }) => {
    try {
      const data = await updateBoardById(id, body);
      dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoardByIdThunk = createAsyncThunk(
  'boards/deleteBoardById',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteBoardById(id);
      dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewColumnThunk = createAsyncThunk(
  'boards/createNewColumn',
  async ({ boardId, body }, { rejectWithValue }) => {
    try {
      const data = await createNewColumn(boardId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateColumnByIdThunk = createAsyncThunk(
  'boards/updateColumnById',
  async ({ boardId, columnId, body }, { rejectWithValue }) => {
    try {
      const data = await updateColumnById(boardId, columnId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumnByIdThunk = createAsyncThunk(
  'boards/deleteColumnById',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const data = await deleteColumnById(boardId, columnId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTasksThunk = createAsyncThunk(
  'boards/getAllTasks',
  async (body, { rejectWithValue }) => {
    try {
      const data = await getAllTasks(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewTaskThunk = createAsyncThunk(
  'boards/createNewTask',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createNewTask(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTaskByIdThunk = createAsyncThunk(
  'boards/updateTaskById',
  async ({ idTask, body }, { rejectWithValue }) => {
    try {
      const data = await updateTaskById(idTask, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTaskByIdThunk = createAsyncThunk(
  'boards/deleteTaskById',
  async (idTask, { rejectWithValue }) => {
    try {
      const data = await deleteTaskById(idTask);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTasksColumnByIdThunk = createAsyncThunk(
  'boards/updateTasksColumnById',
  async ({ idTask, body }, { rejectWithValue }) => {
    try {
      const data = await updateTasksColumnById(idTask, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
