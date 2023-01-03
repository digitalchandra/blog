const express = require('express');
const PORT = 4000;
require('dotenv').config();
const mongoose = require("mongoose")
const app = express();
const connectDB = require('./database/dbConnection')
const authRoutes = require('./routs/auth')
const authUser = require('./routs/user');
const authPost = require('./routs/post');
const authCategory = require('./routs/categories');
const multer = require('multer')
const path = require('path')
 

app.use(express.json())
connectDB();

app.use('/image', express.static(path.join(__dirname,'image')))

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'image')
        

    },

    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now()+'_'+ Math.round(Math.random()*1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },

})

const upload = multer({storage:storage})

app.post('/upload', upload.single('file'),(req, res)=>{
    res.status(200).json("File has Been Uploaded")
})
//Routing 
app.use('/auth/', authRoutes)
app.use('/users',authUser)
app.use('/post',authPost)
app.use('/category',authCategory)

app.get('/', (req,res)=>{
    res.send("<h2> This is the Blog Site </h2>")
})
app.get('*', (req,res)=>{
    res.status(404).send("<h4> Somthing error occored: 404 Error </h4>")
})

app.listen(PORT,()=>{
    console.log(`Express Server Started on port ${PORT}`);
})
