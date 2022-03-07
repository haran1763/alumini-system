const express = require("express");
const {protect} =require('../middleware/authMiddleware')
const { registerUser, loginUser, profile } = require("../controller/userController");
const router = express.Router();

router.post("/register", registerUser);

//Login user
router.post("/login", loginUser);
router.get("/",protect,profile)

module.exports = router;
