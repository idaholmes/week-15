import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/fontawesome-free-solid";
import "./Task.css";

export const Task = ({ task, onTaskDelete, onTaskEdit, onTaskComplete }) => {
  // set what visually shows on the screen if a task is completed or not
  const taskStatus = task.completed ? "Completed" : "In Progress";
  // set default editing state to false so we can later show the editing form when the user clicks edit
  const [editing, setEditing] = useState(false);
  // by setting editValue to task.title we can show the current tasks title when a user clicks edit
  const [editValue, setEditValue] = useState(task.title);

  // set localstate to the value of what is being typed
  // we will later send this value up to the parent compoent via the onTaskEdit prop
  const handleEditChange = (event) => {
    const { value } = event.target;
    setEditValue(value);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <span>{taskStatus}</span>
      <div className="inner-wrapper">
        <button onClick={() => onTaskDelete(task.id)}>
          <FontAwesomeIcon icon={faTrash} style={{ marginInline: "16px" }} />
        </button>
        <button onClick={() => setEditing(!editing)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <input
          type="checkbox"
          checked={task.completed}
          // pass event and newTaskData up to the parent component via the onTaskComplete prop
          onChange={(event) =>
            onTaskComplete(event, {
              ...task,
              completed: !task.completed,
            })
          }
        />
        {editing && (
          <form
            onSubmit={(event) =>
              // pass event and newTaskData up to the parent component via the onTaskEdit prop
              onTaskEdit(event, {
                ...task,
                title: editValue,
              })
            }
          >
            <input onChange={handleEditChange} value={editValue} autoFocus />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};
