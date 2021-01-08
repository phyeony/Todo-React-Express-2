import axios from "axios";
import React from "react";

export default ({ todo, setState }) => {
  const onComplete = () => {
    console.log("completed this todo", todo.id);
  };

  const onDelete = async () => {
    console.log("delete this todo", todo.id);
    const res = await axios.delete(`http://localhost:4000/todos/${todo.id}`);
    setState("Delete");
  };

  return (
    <li className="container">
      <text style={{ marginRight: "5%" }}>{todo.title}</text>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "red" }}
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};
