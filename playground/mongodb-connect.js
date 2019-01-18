// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
var obj = new ObjectID();
console.log(obj);
var user = {
  name: "shubham",
  age: 34
};
var { name } = user;
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      console.log(`unable to connect to server`);
    }
    console.log(`mongo db server connected`);
    const db = client.db("TodoApp");
    // db.collection("Todos").insertOne(
    //   {
    //     task: "something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       console.log(`unable to insert todo`, err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );
    // // db.collection("Users").insertOne(
    // //   {
    // //     name: "Shubham Arya",
    // //     Age: 34,
    // //     location: "Ontario"
    // //   },
    // //   (err, result) => {
    // //     if (err) {
    // //       console.log(`Unable to connect`);
    // //     }
    // //     console.log(
    // //       JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)
    // //     );
    // //   }
    // );
    // db.collection("Users")
    //   .find({ completed: true })
    //   .toArray()
    //   .then(
    //     document => {
    //       console.log(`Todos: `);
    //       console.log(JSON.stringify(document, undefined, 2));
    //     },
    //     err => {
    //       console.log(`unable to fetch document`, err);
    //     }
    //   );
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos Counts:${count} `);

    //     },
    //     err => {
    //       console.log(`unable to fetch document`, err);
    //     }
    //   );
    db.collection("Users")
      .find({
        name: "Leonardo de caprio"
      })
      .toArray()
      .then(
        document => {
          console.log(`Users:`);
          console.log(JSON.stringify(document, undefined, 2));
        },
        err => {
          console.log("unable to fetch", err);
        }
      );
    client.close();
  }
);
