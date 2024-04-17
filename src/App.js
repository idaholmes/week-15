import { useEffect, useState } from "react";
import "./App.css";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm";
import axios from "axios";
import { Task } from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const BASE_URL = "https://661ec44116358961cd92c866.mockapi.io/tasks/task";

  const fetchTasks = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const onTaskSubmit = async (newTask) => {
    try {
      await axios.post(BASE_URL, newTask);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const onTaskDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + `/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const onTaskEdit = async (event, editedTask) => {
    event.preventDefault();
    try {
      await axios.put(BASE_URL + `/${editedTask.id}`, editedTask);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const onTaskComplete = async (event, editedTask) => {
    event.preventDefault();
    try {
      await axios.put(BASE_URL + `/${editedTask.id}`, editedTask);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Master</h1>
      <NewTaskForm onTaskSubmit={onTaskSubmit} />
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
