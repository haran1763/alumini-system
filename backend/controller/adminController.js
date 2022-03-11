const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const registerAdmin = asyncHandler(async (req, res, next) => {
  // console.log(req.params)
  // let trial
  // if(req.params.id==='Admin'){
  //   trial=Admin
  // }
  // else if(req.params.id==='staff'){
  //   trial=staff
  // }else{
  //   trial=alumini
  // }

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add required the fields");
  }
  //finds whether the Admin already exist
  const userExists = await Admin.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Alumini already exist, Please Login");
  }
  //hashing password
  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(password, salt);

  
    const user = await Admin.create({
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
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });

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


//view our profile
const profile = asyncHandler(async(req,res,next)=>{
  res.status(200).json(req.user)
})




//Token creation
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerAdmin,
  loginAdmin,
  profile
};
