const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  name: {
    type: String,
  },
  collegeID: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },
  passedOut: {
    type: Number,
  },
  designation: {
    type: String,
  },
});

module.exports = mongoose.model("Request", requestSchema);
