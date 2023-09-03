import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoard,
  createNewColumn,
  deleteBoardById,
  deleteColumnById,
  getAllBackgrounds,
  getAllBoards,
  getCurrentBoard,
  updateBoardById,
  updateColumnById,
} from 'api/boardsApi/dashBoardsApi';
import {
  createNewTask,
  deleteTaskById,
  getAllTasks,
  getFilteredTasks,
  updateTaskById,
  updateTasksColumnById,
} from 'api/boardsApi/tasksApi';

//Отримання всіх дощок
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

//Отримання об'єкту однієї дошки// при її виклику передаємо їй id обраної дошки
// діспатчимо її одночасно із getAllTasksThunk
export const getCurrentBoardThunk = createAsyncThunk(
  'boards/getCurrentBoard',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await getCurrentBoard(id);
      dispatch(getAllTasksThunk(id));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створення дошки// сюди передаємо от такого формату об'єкт {title: "", icon: "", background: ""}
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

//Оновлення дошки// сюди передаємо от такого формату об'єкт { id, body: {title: "", icon: "", background: ""}}
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

//Видалення  однієї дошки// при її виклику передаємо їй id обраної дошки
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

//Створення колонки// сюди передаємо от такого формату об'єкт { boardId, body: {title: ""}}
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

//Оновлення колонки// сюди передаємо от такого формату об'єкт { boardId, columnId, body: {title: ""}}
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

//Видалення колонки// при її виклику передаємо їй boardId дошки, на якій вона лежить та
// columnId самої колокни
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

//Отримання всіх тасок// сюди передаємо id дошки, для якої нам потрібно отримати таски
export const getAllTasksThunk = createAsyncThunk(
  'boards/getAllTasks',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getAllTasks(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створення таски// сюди передаємо от такого формату об'єкт
//{ title: "", text: "", priority: "", deadline: "", boardId: "", columnId: "" }
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

//Оновлення таски// сюди передаємо от такого формату об'єкт
//{idTask, body: { title: "", text: "", priority: "", deadline: "", boardId: "", columnId: "" }}
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

//Видалення таски// при її виклику передаємо їй idTask обраної таски
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

//Переміщення картки в іншу колонку//сюди передаємо от такого формату об'єкт
//{idTask, body: {columnId:""}}
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

// Отримання відфільтрованих тасок по пріоритетності//сюди передаємо обєкт такого формату {boardId:"", priority:"назва пріпрітету"}
export const getFilteredTasksThunk = createAsyncThunk(
  'tasks/getFilteredTasks',
  async ({ boardId, priority }, { rejectWithValue }) => {
    try {
      const data = await getFilteredTasks(boardId, priority);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllBackgroundsThunk = createAsyncThunk(
  'boards/getAllBackgrounds',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllBackgrounds();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
