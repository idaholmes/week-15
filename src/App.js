import "./App.css";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task Master</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
