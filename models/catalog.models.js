const mongoose= require('mongoose');

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


module.exports = catalogs;
