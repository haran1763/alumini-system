const mongoose = require("mongoose");

const aluminiSchema = new mongoose.Schema(
  {
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
    department: {
      type: String,
    },
    passedout: {
      type: Number,
    },
    company: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Alumini", aluminiSchema);
