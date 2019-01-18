var mongoose = require("mongoose");
var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    default: "example@123.com",
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 3
  }
});
module.exports = {
  User
};
