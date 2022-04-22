//may be used in future
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getDetails,
  updateProfile,
} = require("../controller/dashboardController");
const { registerAdmin } = require("../controller/userController");
const router = express.Router();

router.get("/:id", protect, getDetails);
router.post("/Admin", protect, registerAdmin);
router.post("/updateProfile/:id", updateProfile);

module.exports = router;
