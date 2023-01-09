const mongoose= require('mongoose');

const items = mongoose.model(
    "items",
    new mongoose.Schema({
        id:{
            type:id,
            required:true
        },
        id_restaurant:{
            type:id_restaurant,
            required:true
        },
        picture:{
            type:Picture,
            required:true
        },
        type:{
            type:type,
            required:true
        },
        price:{
            type:price,
            required:true
        },
    })
);

const menus = mongoose.model(
    "menus",
    new mongoose.Schema({
        id:{
            type:id,
            required:true
        },
        id_restaurant:{
            type:id_restaurant,
            required:true
        },
        picture:{
            type:Picture,
            required:true
        },
        type:{
            type:type,
            required:true
        },
        price:{
            type:price,
            required:true
        },
        items:{
            type:items,
            required:true
        }
    })
);


const catalogs = mongoose.model(
    "catalogs",
    new mongoose.Schema({
        id:{
            type:id,
            required:true
        },
        id_restaurant:{
            type:id_restaurant,
            required:true
        },
        items:{
            type:items,
            required:true
        },
        menus:{
            type:menus,
            required:true
        },
    })
);


module.exports = items;
module.exports = menus;
module.exports = catalogs;
