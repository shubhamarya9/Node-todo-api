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
    // db.collection("Todos")
    //   .findOneAndDelete({
    //     _id: new ObjectID("5c3df5821dedd4b4074806ca")
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });
    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5c41d5cf38fbd61e4fb88d88")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });
    db.collection("Users")
      .findOneAndUpdate(
        {
          name: "Shubham"
        },
        {
          $inc: {
            Age: 5
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));
  }
);
