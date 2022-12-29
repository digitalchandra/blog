const express = require('express')
const mongoose = require('mongoose')


const connectDB =()=>{
    mongoose.connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(console.log(" MongoDB connected"))
    .catch((err)=> console.log(err))
}

module.exports = connectDB

