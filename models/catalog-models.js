const mongoose= require('mongoose');

const Item = mongoose.item(
    "Item",
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

module.exports = Sensor;