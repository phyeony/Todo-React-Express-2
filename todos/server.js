const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let todos = [];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  todos.push({
    'id': id,
    'title': title
  }); 

  res.status(201).send(todos);
});

app.delete("/todos/:id", (req, res) => {
    todos = todos.filter((todo)=> req.params.id !== todo.id )
    res.status(202).send(todos);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
