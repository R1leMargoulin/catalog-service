const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
app.use(express.json());

require('dotenv').config();
const db = require('../models');

app.get("/:id_restorant", (req,res)=>{
    var idr = req.params.id_restorant;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
    db.items.find({id_restaurant:idr}).then((e)=>{
        res.status(200).json(e);
    }).catch(()=>{
        res.status(404).json({message: 'sensor not found'});
    })
});

app.get("/:id_restorant/:num_article", (req,res)=>{
    var numa = req.params.num_article;
    db.items.find({id:numa}).then((e)=>{
            res.status(200).json(e);
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
});
app.post("/", (req,res)=>{
    console.log(req.body)
    var newItem = {
        id:req.body.numa,
        id_restaurant:req.body.idr,
        name: req.body.name,
        picture:req.body.picture,
        type:req.body.type,
        price:req.body.price
    }
    db.items.find({id:newItem.id}).then((item)=>{
        if(item.length!==0){
            console.log(item)
            res.status(409).json({message:"l'id est deja pris"})
        }
        else{
            //sensors.push(newSensor);
            db.items.insertMany(newItem)
            res.status(200).json({message:`l'id ${newItem.id} a bien été ajouté`})
            //console.log(items)
        }
    })
    
});

module.exports = app;