import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAddTask({ title, status });
      setTitle('');
      setStatus('todo'); // Reset status to default 'todo' after adding a task
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To-Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
