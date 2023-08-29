import { createSlice } from '@reduxjs/toolkit';
import { getFilteredTasksThunk } from './thunks';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    // priority: '',
    filteredTasks: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   setPriority: (state, action) => {
  //     state.priority = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(getFilteredTasksThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredTasksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredTasks = action.payload;
        // handleGetAllTasksFulfilled
      })
      .addCase(getFilteredTasksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPriority } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// при onChange={onFilter} на радіобаттон

// const onFilter = e => {
//   dispatch(getFilteredTasksThunk({ boardId: '', priority: e.target.value }));
// };

//  або залишити в слайсі priority i reducer - setPriority
// i при onChange={onFilter} на радіобаттон
// const onFilter = e => {
// dispatch(setPriority(e.target.value));
// dispatch(getFilteredTasksThunk({ boardId: '', priority: e.target.value }));}
