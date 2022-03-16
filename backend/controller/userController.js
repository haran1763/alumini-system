const Admin = require("../models/adminModel");
const staff =require('../models/staffModel')
const Alumini = require("../models/userModel")
const Request = require('../models/requestModel')
const Event = require('../models/eventsModel')
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const registerAdmin = asyncHandler(async (req, res, next) => {
 
 let trial
  if(req.params.id==='Admin'){
    trial=Admin
  }
  else if(req.params.id==='staff'){
    trial=staff
  }else if(req.params.id === 'Alumini'){
    trial=Request
  }
  else if(req.body.params=== 'event'){
    trial = Event
  }
  

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add required the fields");
  }
  //finds whether the Admin already exist
  const userExists = await trial.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Alumini already exist, Please Login");
  }
  //hashing password
  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(password, salt);

  
    const user = await trial.create({
      username,
      email,
      password: hashedPassword,
    });
 
  
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')}
  
});

//Login user

const loginAdmin = asyncHandler(async (req, res, next) => {
  let trial
  if(req.params.id==='Admin'){
    trial=Admin
  }
  else if(req.params.id==='staff'){
    trial=staff
  }else{
    trial=Alumini
  }
  const { email, password } = req.body;

  const user = await trial.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token:generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});







//Token creation
const generateToken = (id) => {
  return jwt.sign({ id }, 'SECRET', {
    expiresIn: '30d',
  })
}

module.exports = {
  registerAdmin,
  loginAdmin
};
