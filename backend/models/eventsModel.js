const mongoose = require('mongoose')


const eventSchema = mongoose.Schema({
    _id:{
        type:Number,
        default:this.countDocuments+1
    },
    Event:String,
    Date:Date,
    place:String,
    Description:String
    
})


module.exports = mongoose.model('Events',eventSchema)