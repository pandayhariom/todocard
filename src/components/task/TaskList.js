import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ title, tasks, onUpdate, onDelete, onMove }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} onMove={onMove} />
      ))}
    </div>
  );
};

export default TaskList;
