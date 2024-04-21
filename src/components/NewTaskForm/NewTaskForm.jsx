import React, { useState } from "react";
import "./NewTaskForm.css";

export const NewTaskForm = ({ onTaskSubmit }) => {
  // set newTask to an empty object on load
  const [newTask, setNewTask] = useState({
    title: "",
    id: "",
    completed: false,
  });

  // function for handling the change event
  const handleChange = (event) => {
    // deconstruct name and value out of event
    const { name, value } = event.target;

    // edit the previous task via a callback function, and access the key that matches the event name, and update its value with the new value
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // function for submitting the task back up to the parent component
  const handleSubmit = async (event) => {
    event.preventDefault();
    // use the spread operator to update the id field with a random id before posting to api / sending to onTaskSubmit function prop
    onTaskSubmit({
      ...newTask,
      id: Math.floor(Math.random() * 200) + 1,
    });

    // set newTask back to empty object afterwards to make the form ready for a new task to be submitted
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
