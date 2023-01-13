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
        id: req.body.num_menu,
        id_restaurant:req.body.id_restaurant,
        picture:req.body.picture,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        items:req.body.items
    }
    db.menus.find({id:newMenu.id}).then((menu)=>{
        if(menu.length!==0){
            console.log(menu)
            res.status(409).json({message:"l'id est deja pris"})
        }
        else{
            //sensors.push(newSensor);
            db.menus.insertMany(newMenu)
            res.status(200).json({message:`l'id ${newMenu.id} a bien été ajouté`})
        }
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


    db.menus.find({id:numm}).then((e)=>{
            res.status(200).json(e);
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
    

    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});

module.exports = app;