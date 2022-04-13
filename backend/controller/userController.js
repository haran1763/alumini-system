const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerAdmin = asyncHandler(async (req, res, next) => {
  const { emailR, passwordR, designation, department } = req.body;

  if (!emailR || !passwordR) {
    res.status(404);
    throw new Error("Please add required the fields");
  }

  //finds whether the Admin already exist
  const userExists = await Admin.findOne({ email: emailR });

  if (userExists) {
    res.status(400);
    throw new Error("Data already exist, Please Login");
  }
  //hashing password
  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(passwordR, salt);

  const user = await Admin.create({
    email: emailR,
    designation,
    department,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      emailR: user.email,
      department: user.department,
      designation: user.designation,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//Login user

const loginAdmin = asyncHandler(async (req, res, next) => {
  let trial;
  if (req.params.id === "Admin") {
    trial = Admin;
  } else if (req.params.id === "staff") {
    trial = staff;
  } else {
    trial = Alumini;
  }
  const { email, password } = req.body;

  const user = await trial.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//Token creation
const generateToken = (id) => {
  return jwt.sign({ id }, "SECRET", {
    expiresIn: "30d",
  });
};

module.exports = {
  registerAdmin,
  loginAdmin,
};
