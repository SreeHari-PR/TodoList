import React from "react";
import { useState } from "react";

// function ListTasks({ task, index, removeTask }) {
//   return (
//     <>
//       <div className="list-tasks">
//         {task.title}
//         <button
//           onClick={() => {
//             removeTask(index);
//           }}
//           className="delete-btn"
//         >
//           Delete
//         </button>
//       </div>
//     </>
//   );
// }

function ListTasks({ task, index, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    editTask(index, editedTitle);
    setIsEditing(false);
  };

  return (
    <>
      <div className="list-tasks">
        {isEditing ? (
          <>
          <div className="input-edit-container">
            <input
              type="text"
              className="input-edit"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button className="save-btn" onClick={handleEdit}>Save</button>
            </div>
          </>
        ) : (
          <>
            <span>{task.title}</span>
            <button className="delete-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}

export default ListTasks;
