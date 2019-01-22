const express = require("express");
const _ = require("lodash");
const bodyParser = require("body-parser");
var app = express();
const { mongoose } = require("./db/mongooose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");
var { ObjectID } = require("mongodb");
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
app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});
app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(todo => {
    if (!todo) {
      res.status(404).send();
    }
    res.status(200).send(todo);
  });
});
app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ["text", "completed"]);
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      res.status(200).send({ todo });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started successfully on ${port}`);
});
