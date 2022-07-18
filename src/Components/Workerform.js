import React from "react";
import "../Components/Workerform.css";

const Usureform = () => {
  return (
    <div className="users-container">
      <form className="form-worker">
        <label>First Name</label>
        <input type="text" placeholder="First name" />
        <label>Last Name</label>
        <input type="text" placeholder="Last name" />
        <label>Category</label>
        <input type="text" placeholder="category" />
        <label>Description</label>
        <textarea placeholder="description"></textarea>
      </form>
      <div className="output-test"></div>
    </div>
  );
};

export default Usureform;
