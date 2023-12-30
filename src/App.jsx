import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import TasksContainer from "./components/tasksContainer";
import Navbar from "./components/navbar";
import TaskForm from "./components/taskForm";

function App() {
  const [formVisible, setFormVisibility] = useState(false);
  let tasks = localStorage.getItem("tasks");
  if (tasks === null) {
    localStorage.setItem("tasks", "[]");
  } else {
    tasks = JSON.parse(tasks);
  }

  return (
    <>
      <Navbar onOpen={() => setFormVisibility(true)} />
      {formVisible && (
        <TaskForm tasks={tasks} onCancel={() => setFormVisibility(false)} />
      )}
      <TasksContainer tasks={tasks} />
    </>
  );
}

export default App;
