import { useSelector } from 'react-redux';
import { selectFilteredTasks } from '../../features/tasks/tasksSlice';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <p className="text-lg">No tasks found</p>
        <p className="text-sm mt-2">Add a new task or adjust your filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
