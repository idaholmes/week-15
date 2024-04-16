import React, { useState } from "react";
import "./NewTaskForm.css";

export const NewTaskForm = ({ onTaskSubmit }) => {
  const [newTask, setNewTask] = useState({
    task: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskSubmit(newTask);
    setNewTask({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Task:
        <textarea name="task" value={newTask.task} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
