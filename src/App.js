import { useEffect, useState } from "react";
import "./App.css";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm";
import axios from "axios";
import { Task } from "./components/Task/Task";

function App() {
  // set tasks to an empty array on initial load
  const [tasks, setTasks] = useState([]);
  // api url from where we will edit and access our api data
  const BASE_URL = "https://661ec44116358961cd92c866.mockapi.io/tasks/task";

  // GET CRUD Request
  // gets all tasks from the api
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      // set local tasks data to what the api gives us
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // POST CRUD request
  // Creates a new task
  const onTaskSubmit = async (newTask) => {
    try {
      await axios.post(BASE_URL, newTask);
      // fetch tasks again so screen visually updates
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE CRUD Request
  // Deletes a task from the api
  const onTaskDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + `/${id}`);
      // fetch tasks again so screen visually updates
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // PUT CRUD Request
  // Edits an existing task in the api
  const onTaskEdit = async (event, editedTask) => {
    event.preventDefault();
    try {
      // fetch task from api that matches the right id, then update it with updated task
      await axios.put(BASE_URL + `/${editedTask.id}`, editedTask);
      // fetch tasks again so screen visually updates
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // PUT CRUD Request
  // 'Completes' an existing task in the api
  const onTaskComplete = async (event, editedTask) => {
    event.preventDefault();
    try {
      // fetch task from api that matches the right id, then update it with updated task
      await axios.put(BASE_URL + `/${editedTask.id}`, editedTask);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // load tasks on initial load
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Master</h1>
      <NewTaskForm onTaskSubmit={onTaskSubmit} />
      {/* map over tasks array and return a Task component for each one, and supplying it with the neccesary props */}
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onTaskDelete={onTaskDelete}
          onTaskEdit={onTaskEdit}
          onTaskComplete={onTaskComplete}
        />
      ))}
    </div>
  );
}

export default App;
