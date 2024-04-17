import React, { useState } from "react";
import "./NewTaskForm.css";

export const NewTaskForm = ({ onTaskSubmit }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    id: "",
    completed: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onTaskSubmit({
      ...newTask,
      id: Math.floor(Math.random() * 200) + 1,
    });
    setNewTask({
      title: "",
      id: "",
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Task:
        <textarea name="title" value={newTask.title} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
