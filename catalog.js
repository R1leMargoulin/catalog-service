const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.sensor = require('./sensor.models');
module.exports = db



//routes
app.get("/ping", (req,res) =>{
    res.status(200).json({message:'pong'});
});

app.get("/catalogs", (req,res)=>{
    //montrer tous les catalogues
    //client: READ ONLY
    //resto: il a des boutons pour CRUD complet
});

app.get("/catalog/:idr", (req,res)=>{
    var id = req.params.id;
    //montrer le catalogue de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});

app.get("/catalog/:idr/menus", (req,res)=>{
    var id = req.params.id;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});

app.get("/catalog/:idr/menus/:numm", (req,res)=>{
    var idr = req.params.id;
    var numm = req.params.id;
    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});
app.get("/catalog/:idr/menus", (req,res)=>{
    var idr = req.params.id;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});

app.get("/catalog/:idr/menus/:numa", (req,res)=>{
    var idr = req.params.id;
    var numa = req.params.id;
    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});
app.post("/catalog/:idr/menus/:numa", (req,res)=>{
    var idr = req.params.id;
    var numa = req.params.id;



    var newMenu = {
        id:req.body.id,
        type:req.body.type,
        datas:req.body.datas,
        metrics:req.body.metrics
    }
    var sensor = sensors.find((sensor)=>{
        return sensor.id == newSensor.id
    })
    if(sensor){
        res.status(409).json({message:"l'id est deja pris"})
    }
    else{
        //sensors.push(newSensor);
        db.sensor.insertMany(newSensor)
        res.status(200).json({message:`l'id ${newSensor.id} a bien été ajouté`})
        console.log(sensors)
    }
});



app.listen(3000, ()=>{
    console.log('server is running on port 3000.')
});