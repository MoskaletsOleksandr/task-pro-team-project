import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFilteredTasks } from 'api/filterApi';

export const getFilteredTasksThunk = createAsyncThunk(
  'tasks/getFilteredTasks',
  async (body, { rejectWithValue }) => {
    try {
      const data = await getFilteredTasks(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
