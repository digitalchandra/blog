const router = require('express').Router()
const User = require('../models/user')
const Post = require('../models/post')
const bcrypt = require('bcrypt')

//user update 

router.put("/:id", async (req,res)=>{
    if(req.body.userId == req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {
                    new:true,
                }
    
            )
            res.status(200).json(updateUser)
    
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(401).json("You can update your profile")
    }
})


// delete user

router.delete("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        // delete user and their post 
        try{
            const user= await User.findById(req.params.id)
                try{
                    await Post.deleteMany({username:user.username})
                    // only delete user
                    await User.findByIdAndDelete(req.params.id)
                    res.status(200).json("user has been deleted succussfully...")
                }catch(error){
                    res.status(500).json(error)
                }
            
        }catch(error){
            res.status(404).json("user not found..")
        }
    }else{
        res.status(401).json("you can delete only your account")
    }
})



module.exports = router







