import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Complete project setup', status: 'completed' },
    { id: '2', title: 'Implement Redux store', status: 'completed' },
    { id: '3', title: 'Build UI components', status: 'pending' },
    { id: '4', title: 'Add search and filter functionality', status: 'pending' },
    { id: '5', title: 'Implement theme toggle', status: 'pending' },
  ],
  filter: 'all', // all, completed, pending
  searchQuery: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now().toString(),
        title: action.payload.title,
        status: 'pending',
      };
      state.tasks.push(newTask);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.title = title;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === 'pending' ? 'completed' : 'pending';
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskStatus,
  setFilter,
  setSearchQuery,
} = tasksSlice.actions;

// Selectors
export const selectFilteredTasks = (state) => {
  let filteredTasks = state.tasks.tasks;

  // Apply status filter
  if (state.tasks.filter === 'completed') {
    filteredTasks = filteredTasks.filter(task => task.status === 'completed');
  } else if (state.tasks.filter === 'pending') {
    filteredTasks = filteredTasks.filter(task => task.status === 'pending');
  }

  // Apply search query
  if (state.tasks.searchQuery) {
    filteredTasks = filteredTasks.filter(task =>
      task.title.toLowerCase().includes(state.tasks.searchQuery.toLowerCase())
    );
  }

  return filteredTasks;
};

export default tasksSlice.reducer;
