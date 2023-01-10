const mongoose= require('mongoose');

const items = mongoose.model(
    "items",
    new mongoose.Schema({
        id:{
            type:Number,
            required:true
        },
        id_restaurant:{
            type:Number,
            required:true
        },
        picture:{
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