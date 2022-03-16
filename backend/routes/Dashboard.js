//may be used in future
const express = require("express")
const {protect } = require('../middleware/authMiddleware')
const { getDetails, updateProfile } = require("../controller/dashboardController")
const { registerAdmin } = require("../controller/userController")
const router = express.Router()

router.get('/query',getDetails)
router.post('/Admin',registerAdmin)
router.post('/updateProfile/:id', protect,updateProfile)


module.exports = router

