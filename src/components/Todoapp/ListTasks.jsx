
import React, { useState } from "react";

function ListTasks({ task, index, removeTask, editTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    editTask(index, editedTitle);
    setIsEditing(false);
  };

  return (
    <>
      <div className="list-tasks">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              className="input-edit"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button className="save-btn" onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button
              className="delete-btn"
              onClick={() => setIsEditing(true)}
              disabled={task.completed} // Disable edit button if task is completed
            >
              Edit
            </button>
          </>
        )}
        <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
      </div>
    </>
  );
}

export default ListTasks;
