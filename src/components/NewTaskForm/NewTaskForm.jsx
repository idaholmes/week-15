import React, { useState } from "react";
import "./NewTaskForm.css";

export const NewTaskForm = ({ onTaskSubmit }) => {
  // set newTask to an empty object
  const [newTask, setNewTask] = useState({
    title: "",
    id: "",
    completed: false,
  });

  const handleChange = (event) => {
    // decontruct name and value out of event
    const { name, value } = event.target;

    // edit the previous task via callback, and access the key that matches event name, and update its value with the new value
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // use the spread operator to update the id field with a random id before posting to api / sending to onTaskSubmit function prop
    onTaskSubmit({
      ...newTask,
      id: Math.floor(Math.random() * 200) + 1,
    });

    // set newTask back to empty object afterwards to make the form ready for a new task to be submitteds
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
