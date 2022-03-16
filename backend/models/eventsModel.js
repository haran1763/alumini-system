const mongoose = require('mongoose')


const eventSchema = mongoose.Schema({
    Event:{
        type:String
    },
    Date:{
        type:Date
    },
    place:{
        type:String
    },
    Description:{
        type:String
    }
})


module.exports = mongoose.model('Events',eventSchema)