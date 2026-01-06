import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from './contexts/ThemeContext';
import TaskForm from './components/TaskForm/TaskForm';
import SearchBar from './components/SearchBar/SearchBar';
import FilterButtons from './components/FilterButtons/FilterButtons';
import TaskList from './components/TaskList/TaskList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Task Management Dashboard
              </h1>
              <ThemeToggle />
            </div>

            {/* Task Form */}
            <TaskForm />

            {/* Search Bar */}
            <SearchBar />

            {/* Filter Buttons */}
            <FilterButtons />

            {/* Task List */}
            <TaskList />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App
