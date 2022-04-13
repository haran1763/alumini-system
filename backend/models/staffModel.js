const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
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
    photoURL: {
      type: String,
    },
    qualification: {
      type: String,
    },
    dateofbirth: {
      type: Number,
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

module.exports = mongoose.model("Staffs", staffSchema);
