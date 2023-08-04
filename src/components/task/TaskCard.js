import React, { useState } from 'react';

const TaskCard = ({ task, onUpdate, onDelete, onMove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdate({ ...task, title: updatedTitle });
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}

      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onMove(task)}>Move</button>
        </>
      )}
    </div>
  );
};

export default TaskCard;
