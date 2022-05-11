const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  event: String,
  date: String,
  venue: String,
  guest: String,
  description: String,
});

module.exports = mongoose.model("Events", eventSchema);
