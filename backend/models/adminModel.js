const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    //   required: [true, "please add your name"],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    //   required: [true, "please add a password"],
  },
  photoURL: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
