const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: {
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
    collegeID: {
      type: String,
    },
    photoURL: {
      type: String,
    },
    qualification: {
      type: String,
    },
    dateofbirth: {
      type: Number,
    },
    department: {
      type: String,
    },
    designation: {
      type: String,
    },
    dateofjoin: {
      type: Date,
    },
    contactNo: {
      type: Number,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
