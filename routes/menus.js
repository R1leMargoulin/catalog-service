const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
app.use(express.json());

require('dotenv').config();
const db = require('../models');


app.get("/ping", (req,res) =>{
    res.status(200).json({message:'pong'});
});

app.post("/add", (req,res)=>{
    console.log(req.body)
    var newMenu = {
        id_restaurant:req.body.id_restaurant,
        picture:req.body.picture,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        type:"menu",
        items:req.body.items
    }
    //sensors.push(newSensor);
    db.menus.insertMany(newMenu).then(()=>{
        res.status(200).json({message:`le menu a bien été ajouté`});
    })
    
});


app.get("/:id_restorant", (req,res)=>{
    var idr = req.params.id_restorant;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
    db.menus.find({id_restaurant:idr}).then((e)=>{
        res.status(200).json(e);
    }).catch(()=>{
        res.status(404).json({message: 'sensor not found'});
    })
});

app.get("/:id_restaurant/:num_menu", (req,res)=>{
    var numm = req.params.num_menu;


    db.menus.find({_id:numm}).then((e)=>{
            res.status(200).json(e);
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
    

    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});

app.put("/modify", (req,res)=>{
    var newMenu = {
        _id: req.body._id,
        id_restaurant:req.body.id_restaurant,
        picture:req.body.picture,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        type:req.body.type,
        items:req.body.items
    }
    db.menus.findOneAndUpdate({_id:newMenu._id},{$set:newMenu}).then(()=>{
            res.status(200).json({message:"Objet modifié"})
        
    }).catch(e=>{
            res.status(404).json({message:`objet non trouvé`})
            //console.log(items)
        })
    
});

app.delete("/:id_restorant/:num_menu", (req,res)=>{
    var numm = req.params.num_menu;
    db.menus.findOneAndDelete({_id:numm}).then(()=>{
            res.status(200).json({message:"item deleted"});
        }).catch(()=>{
            res.status(404).json({message: 'item not found'});
        })
});

module.exports = app;