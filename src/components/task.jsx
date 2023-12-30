import React from "react";
import Button from "./button";

const Task = ({ task }) => {
  let tasks = localStorage.getItem("tasks");
  if (tasks === null) {
    localStorage.setItem("tasks", "[]");
  } else {
    tasks = JSON.parse(tasks);
  }
  function deleteTask() {
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === task.id) {
        index = i;
        break;
      }
    }
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload(false);
  }

  function switchStatus() {
    let status = task.completed ? false : true;
    task.completed = status;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === task.id) {
        tasks[i].completed = status;
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload(false);
  }

  let taskStatus = "card border-primary mb-3";
  if (task.completed === true) {
    taskStatus = "card border-success mb-3";
  }

  return (
    <div className={taskStatus}>
      <div className="card-header">{task.date}</div>
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <Button
          value={task.completed ? "Mark as Uncomplete" : "Mark as Complete"}
          cls="btn btn-link"
          onClick={switchStatus}
        />
        <Button value="Delete" cls="btn btn-link" onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Task;
