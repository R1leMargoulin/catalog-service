const mongoose= require('mongoose');

const items = mongoose.model(
    "items",
    new mongoose.Schema({
        id_restaurant:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        picture:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
    })
);

module.exports = items;