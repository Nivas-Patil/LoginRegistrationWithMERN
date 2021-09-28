// import mongoose from 'mongoose'
const mongoose = require('mongoose')
//create schema using mongoose
const userRegSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})
//now create model
const User = new mongoose.model("User", userRegSchema);
//user = model name 
module.exports= User
