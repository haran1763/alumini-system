const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    department:{
        type:String
    },
    passedout:{
        type:Number
    }
})


module.exports = mongoose.model('Request',requestSchema);
