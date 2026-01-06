import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, toggleTaskStatus } from '../../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editTitle.trim() && editTitle !== task.title) {
      dispatch(editTask({ id: task.id, title: editTitle.trim() }));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm 
                  border border-gray-200 dark:border-gray-600 transition-colors">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEdit();
              if (e.key === 'Escape') handleCancel();
            }}
            className="flex-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded 
                     text-sm transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded 
                     text-sm transition-colors"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(toggleTaskStatus(task.id))}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                     ${
                       task.status === 'completed'
                         ? 'bg-green-500 border-green-500'
                         : 'border-gray-400 dark:border-gray-500 hover:border-green-500'
                     }`}
          >
            {task.status === 'completed' && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </button>
          <span
            className={`flex-1 text-gray-900 dark:text-gray-100 ${
              task.status === 'completed' ? 'line-through text-gray-500 dark:text-gray-400' : ''
            }`}
          >
            {task.title}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              task.status === 'completed'
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            }`}
          >
            {task.status === 'completed' ? 'Completed' : 'Pending'}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded 
                     text-sm transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded 
                     text-sm transition-colors"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
