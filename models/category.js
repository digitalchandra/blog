const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        reauird:true,
    }
})
module.exports = mongoose.model("Category", CategorySchema);