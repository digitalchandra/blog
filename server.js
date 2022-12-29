const express = require('express');
const PORT = 4000;
require('dotenv').config();
const mongoose = require("mongoose")
const app = express();
const connectDB = require('./database/dbConnection')
const authRoutes = require('./routs/auth')


app.use(express.json())
connectDB();



//Routing 
app.use('/auth/', authRoutes)

app.get('/', (req,res)=>{
    res.send("<h2> This is the Blog Site </h2>")
})
app.get('*', (req,res)=>{
    res.status(404).send("<h4> Somthing error occored: 404 Error </h4>")
})

app.listen(PORT,()=>{
    console.log(`Express Server Started on port ${PORT}`);
})
