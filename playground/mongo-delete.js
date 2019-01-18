const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      console.log(`unable to connect to server`);
    }
    console.log(`MongoDB server connected`);
    const db = client.db("TodoApp");
    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ task: "Eat Lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });
    //deleteOne
    //     db.collection("Todos")
    //       .deleteOne({
    //         task: "Eat Lunch"
    //       })
    //       .then(result => {
    //         console.log(result);
    //       });
    db.collection("Todos")
      .findOneAndDelete({
        _id: new ObjectID("5c3df5821dedd4b4074806ca")
      })
      .then(result => {
        console.log(result);
      });
  }
);
