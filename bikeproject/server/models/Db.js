const mongoose =require('mongoose')
const express = require('express')
mongoose.connect("mongodb+srv://elangouser:elango%40143@elangocsd.vuq8ykq.mongodb.net/EKbiker");
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