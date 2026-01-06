# Task Management Dashboard

A responsive Task Management Dashboard built with React.js, Redux Toolkit, and Tailwind CSS.

## Live Demo

**Application URL**: [https://delightful-halva-81892e.netlify.app/](https://delightful-halva-81892e.netlify.app/)

**GitHub Repository**: [https://github.com/Sanchit029/NeuraDyna](https://github.com/Sanchit029/NeuraDyna)

## Features

- Task CRUD Operations (Create, Read, Update, Delete)
- Task Status Management (Pending/Completed)
- Filter tasks by status (All, Completed, Pending)
- Search tasks by title
- Light/Dark theme toggle with persistence
- Mobile responsive design

## Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Setup and Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sanchit029/NeuraDyna.git
cd NeuraDyna
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app/
│   └── store.js                 # Redux store configuration
├── features/
│   └── tasks/
│       └── tasksSlice.js        # Task state management
├── components/
│   ├── TaskForm/                # Add new tasks
│   ├── TaskList/                # Display task list
│   ├── TaskItem/                # Individual task
│   ├── SearchBar/               # Search functionality
│   ├── FilterButtons/           # Filter controls
│   └── ThemeToggle/             # Theme switcher
├── contexts/
│   └── ThemeContext.jsx         # Theme context provider
├── App.jsx                      # Main component
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

## How to Use

### Adding Tasks
- Enter task title in the input field and click "Add Task" or press Enter

### Managing Tasks
- Click checkbox to toggle between Pending and Completed
- Click "Edit" to modify task title
- Click "Delete" to remove task

### Filtering and Searching
- Use filter buttons to view All, Completed, or Pending tasks
- Type in search bar to find tasks by title
- Search works with active filter

### Theme
- Click theme toggle icon to switch between Light and Dark mode
- Theme preference is saved automatically

## Implementation Details

### State Management
- Redux Toolkit for centralized state
- Single `tasksSlice` manages all task operations
- Selector functions for filtered and searched tasks

### Component Architecture
- Functional components with React Hooks
- Separation of concerns between UI and logic
- Context API for theme management

### Styling
- Tailwind CSS utility classes
- Dark mode support
- Mobile-first responsive design

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Assignment Requirements Met

- Task CRUD operations
- Task status management (Pending/Completed)
- Filter tasks by status
- Search functionality
- Light/Dark theme toggle with persistence
- Mobile responsive design
- Redux Toolkit for state management
- Tailwind CSS for styling
- Modern React with hooks and functional components

## Author

Built by Sanchit Bishnoi as part of the NeuraDynamics technical assessment.
