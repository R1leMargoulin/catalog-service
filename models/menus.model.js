const mongoose= require('mongoose');
const menus = mongoose.model(
    "menus",
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
            type:Number,
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
        items:{
            type:Object,
            required:true
        }
    })
);

module.exports = menus;