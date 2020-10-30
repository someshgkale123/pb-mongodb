const mongoose= require("mongoose")


const nameSchema=new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
        
    },
    value:{
        type: Number,
        required: true
        
    },
    color:{
        type: String,
        trim: true,
        required: true,
        minlength:6
    }
},{collection: 'pb_collection'})

module.exports= mongoose.model('pb_collection',nameSchema)