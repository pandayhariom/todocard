import React, { useState } from 'react';
import { initialData } from './components/utils/data';
import './App.css';
import AddTaskForm from './components/task/AddTaskForm';
import ExportToExcel from './components/task/ExportToExcel';
import TaskList from './components/task/TaskList';

const App = () => {
  const [tasks, setTasks] = useState(initialData);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleMoveTask = (taskToMove, newStatus) => {
    setTasks(tasks.map((task) => (task.id === taskToMove.id ? { ...taskToMove, status: newStatus } : task)));
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <ExportToExcel tasks={tasks} />
      <TaskList
        title="To-Do"
        tasks={tasks.filter((task) => task.status === 'todo')}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onMove={(task) => handleMoveTask(task, 'inprogress')}
      />
      <TaskList
        title="In Progress"
        tasks={tasks.filter((task) => task.status === 'inprogress')}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onMove={(task) => handleMoveTask(task, 'done')}
      />
      <TaskList
        title="Done"
        tasks={tasks.filter((task) => task.status === 'done')}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onMove={(task) => handleMoveTask(task, 'inprogress')}
      />
    </div>
  );
};

export default App;
