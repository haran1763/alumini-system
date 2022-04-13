const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { registerAdmin, loginAdmin } = require("../controller/userController");
const router = express.Router();

router.post("/register/:id", registerAdmin);

//Login user
router.post("/login/:id", loginAdmin);

module.exports = router;
