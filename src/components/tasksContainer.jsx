import React from "react";
import Task from "./task";
import "bootstrap/dist/css/bootstrap.css";

const TasksContainer = ({ tasks }) => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center gap-3">
        {tasks.map((value, index) => (
          <Task key={index} task={value} tasks={tasks} />
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
