import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
import "./Task.css";

export const Task = ({ task, onTaskDelete, onTaskEdit, onTaskComplete }) => {
  const taskStatus = task.completed ? "Completed" : "In Progress";
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const BASE_URL = "https://661ec44116358961cd92c866.mockapi.io/tasks/task";

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
