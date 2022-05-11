const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    //   required: [true, "please add your name"],
  },
  email: {
    type: String,
  },
  designation: {
    type: String,
  },
  department: {
    type: String,
  },
  password: {
    type: String,
    //   required: [true, "please add a password"],
  },
});

module.exports = mongoose.model("Admin", adminSchema);
