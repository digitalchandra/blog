const mongoose = require('mongoose')

const UserSehema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true

    },
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        require:true
    },
    profilePic:{
        type:String,
        default: "",

    },

},
{
    timestamps:true,
}

)

module.exports = mongoose.model("user", UserSehema)