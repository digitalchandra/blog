const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { validate } = require('../models/user')

router.post('/register', async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)

    } catch(err){
        console.status(500).json(err)
    }
});

// Login 

router.post('/login', async(req,res)=>{
    try{
        const user= await User.findOne({username: req.body.username})

        // if not users 

        !user && res.status(400).json("user not found !!")
        // 
        const vilated = await bcrypt.compare(req.body.password, user.password)
         // 
          !validate && res.status(400).json("password not match")

          const {password, ...other} = user._doc
          res.status(200).json(other)


    }catch(error){
        res.status(500).json(error)
    }
});

module.exports = router;