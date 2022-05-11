//may be used in future
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getDetails,
  updateEvents,
} = require("../controller/dashboardController");
const { registerAdmin } = require("../controller/userController");
const router = express.Router();

router.get("/:id", protect, getDetails);
router.post("/Admin", protect, registerAdmin);
router.post("/Event", updateEvents);

module.exports = router;
