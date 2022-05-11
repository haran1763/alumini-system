const Admin = require("../models/adminModel");
const Staff = require("../models/staffModel");
const Alumini = require("../models/userModel");
const Request = require("../models/requestModel");
const Events = require("../models/eventsModel");
const asyncHandler = require("express-async-handler");

const getDetails = asyncHandler(async (req, res) => {
  let trial;
  if (req.params.id === "Admin") {
    trial = Admin;
  } else if (req.params.id === "Staff") {
    trial = Staff;
  } else if (req.params.id === "Alumini") {
    trial = Alumini;
  } else if (req.params.id === "Request") {
    trial = Request;
  } else if (req.params.id === "Events") {
    trial = Events;
  }

  const data = await trial.find({});
  res.send(data);
});

const updateEvents = asyncHandler(async (req, res) => {
  const { event, date, venue, description, guest } = req.body;
  if (event === null) {
    throw new Error("Enter a valid event");
  } else {
    await Events.create({
      event,
      date,
      description,
      venue,
      guest,
    });
    res.status(200).json("success");
  }
});

module.exports = {
  getDetails,
  updateEvents,
};
