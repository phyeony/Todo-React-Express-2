import React, {useState} from "react";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";

export default () => {
  const [state, setState] = useState('idle');

  return (
    <div className="container">
      <h1>Create To-do</h1>
      <TodoCreate state={state} setState={setState} />
      <h1>Todos</h1>
      <TodoList state={state} setState={setState}/>
    </div>
  );
};
