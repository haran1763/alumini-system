const Admin = require('../models/adminModel')
const Staff = require('../models/staffModel')
const Alumini = require('../models/userModel')
const Request = require('../models/requestModel')
const Events = require('../models/eventsModel')
const asyncHandler = require('express-async-handler')


const getDetails =  asyncHandler( async (req,res)=>{
    let trial
    if(req.query.id === 'Admin'){
        trial = Admin
    }
    else if(req.query.id === 'Staff'){
        trial = Staff
    }
    else if(req.query.id === 'Alumini'){
        trial = Alumini
    }
    else if(req.query.id === 'Request'){
        trial = Request
    }
    else if(req.query.id === 'Events'){
        trial = Events
    }
    const data = await trial.find()  
    res.json({data})  
    
})


const updateProfile =  asyncHandler( async (req,res)=>{
    if(req.params.id === 'Admin'){
        trial = Admin
    }
    else if(req.params.id === 'Staff'){
        trial = Staff
    }
    else if(req.params.id === 'Alumini'){
        trial = Alumini
    }
    else{
        trial = Events
    }
    const email = req.body.email

    const user = await trial.findOne({email})
    user.set({
        department:req.body.department
    })
    console.log(user)
    res.json(user)
 
})


module.exports = {
    getDetails,
    updateProfile
}