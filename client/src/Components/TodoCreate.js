import React, { useState } from "react";
import axios from "axios";

export default ({ state, setState }) => {
  const [inputText, setInputText] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("inputText", inputText);
    await axios
      .post("http://localhost:4000/todos", {
        title: inputText,
      })
      .then((response) =>
        window.localStorage.setItem("todos", JSON.stringify(response.data))
      );

    setInputText("");
    setState("Add");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={inputText}
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};
