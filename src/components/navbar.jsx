import React from "react";

const Navbar = ({ onOpen }) => {
  return (
    <nav className="navbar bg-body-tertiary mb-3">
      <div className="container-fluid">
        <h1 className="navbar-brand">Todo list</h1>
        <div className="d-flex">
          <button type="button" className="btn btn-primary new-task-btn" onClick={onOpen}>
          <i className="bi bi-plus-lg"></i>
            New Task
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
