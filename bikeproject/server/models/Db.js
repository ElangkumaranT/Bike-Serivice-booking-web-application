const mongoose =require('mongoose')
const express = require('express')
mongoose.connect("mongodb://localhost:27017/EKbiker");
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    PhoneNumber: {
        type: String,
     },
     Email: {
        type: String,
        
     },
     Password: {
      type: String,
   },
     BikeService : {
        type: String,
     },
     OilChange: {
        type: String,
     },
     Genderalservice: {
        type: String,
     },
     Status: {
      type: String,
   },


})
const userModel=mongoose.model("bikeservice",userSchema)
module.exports=userModel