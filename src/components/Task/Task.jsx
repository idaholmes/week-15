import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/fontawesome-free-solid";
import "./Task.css";

export const Task = ({ task, onDelete, onEdit }) => {
  const taskStatus = task.completed ? "Completed" : "In Progress";

  const handleDelete = (id) => {
    console.log("Delete ID:", id);
  };

  const handleEdit = (id) => {
    console.log("Edit ID:", id);
  };

  return (
    <div>
      <h2>{task.name}</h2>
      <span>{taskStatus}</span>
      <button onClick={() => handleDelete(task.id)}>
        <FontAwesomeIcon icon={faTrash} style={{ marginInline: "16px" }} />
      </button>
      <button onClick={() => handleEdit(task.id)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
};
