import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";

export default ({ state, setState }) => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const res = await axios
      .get("http://localhost:4000/todos")
      .then(res => setTodos(res.data));
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect!");
    setState("idle");
  }, [state]);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} setState={setState} />;
        })}
      </ul>
    </div>
  );
};
