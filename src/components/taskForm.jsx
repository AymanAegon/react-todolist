import React from "react";
import { useState } from "react";
import "./style.css";

const TaskForm = ({ onCancel, tasks }) => {
  let newId = 0;
  if (tasks.length > 0) {
    newId = tasks[tasks.length - 1].id + 1;
  }
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let [newTask, setNewTask] = useState({
    id: newId,
    title: "Title",
    description: "Description",
    date: day+"-"+month+"-"+year,
    completed: false
  });

  function createTask() {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function handleTitleChange(e) {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  }
  function handleDescChange(e) {
    setNewTask({
      ...newTask,
      description: e.target.value,
    });
  }
  return (
    <div className="container form-container shadow-lg">
      <form>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={handleDescChange}
          />
        </div>
        <button className="btn btn-primary" onClick={createTask}>
          Submit
        </button>
        <button className="btn btn-secondary m-3" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
