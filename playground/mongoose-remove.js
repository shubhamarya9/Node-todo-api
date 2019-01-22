const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongooose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

Todo.findByIdAndRemove("5c478ea138fbd61e4fb9143e").then(res =>
  console.log(res)
);
