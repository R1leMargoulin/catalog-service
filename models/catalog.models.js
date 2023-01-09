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


const catalogs = mongoose.model(
    "catalogs",
    new mongoose.Schema({
        id:{
            type:Number,
            required:true
        },
        id_restaurant:{
            type:Number,
            required:true
        },
        items:{
            type:Object,
            required:true
        },
        menus:{
            type:Object,
            required:true
        },
    })
);


module.exports = items;
module.exports = menus;
module.exports = catalogs;
