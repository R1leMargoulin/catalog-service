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
app.post("/add", (req,res)=>{
    console.log(req.body)
    var newItem = {
        id_restaurant:req.body.id_restaurant,
        name: req.body.name,
        picture:req.body.picture,
        description: req.body.description,
        type:req.body.type,
        price:req.body.price
    }
        //sensors.push(newSensor);
        db.items.insertMany(newItem).then(()=>{
            res.status(200).json({message:`l'item a bien été ajouté`})
        }).catch(e=>{
            res.status(400).json({message:`error`})
        })
        //console.log(items)
    
});

app.put("/modify", (req,res)=>{
    console.log(req.body)
    var newItem = {
        _id:req.body._num_article,
        id_restaurant:req.body.id_restaurant,
        name: req.body.name,
        picture:req.body.picture,
        description: req.body.description,
        type:req.body.type,
        price:req.body.price
    }
    db.items.findOneAndUpdate({_id:newItem._id},{$set:newItem}).then(()=>{
            res.status(200).json({message:"Objet modifié"})
        
    }).catch(e=>{
            res.status(404).json({message:`objet non trouvé`})
            //console.log(items)
        })
    
});

app.delete("/:id_restorant/:num_article", (req,res)=>{
    var numa = req.params.num_article;
    db.items.findOneAndDelete({id:numa}).then(()=>{
            res.status(200).json({message:"item deleted"});
        }).catch(()=>{
            res.status(404).json({message: 'item not found'});
        })
});

module.exports = app;