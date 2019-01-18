const express = require("express");
const bodyParser = require("body-parser");
var app = express();
const { mongoose } = require("./db/mongooose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");
app.use(bodyParser.json());
app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    success => {
      res.send(success);
    },
    err => res.status(400).send(err)
  );
});
app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    err => res.status.send(err)
  );
});
app.listen(3000, () => {
  console.log(`Server started successfully`);
});
