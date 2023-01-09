const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json());

require('dotenv').config();

process.env.MONGO_HOST

//connection
const db = require('./models')
db.mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('connexion sucess')
}).catch(err =>{
    console.log('connexion error')
    process.exit()
})



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

app.get("/catalog/:idr/articles/:numa", (req,res)=>{
    var idr = req.params.id;
    var numa = req.params.id;
    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});
app.post("/catalog/:idr/articles/:numa", (req,res)=>{
    var idr = req.params.id;
    var numa = req.params.id;
    var newItem = {
        id:numa,
        id_restaurant:idr,
        picture:req.body.picture,
        type:req.body.type,
        price:req.body.price
    }
    var item = catalog-models.find((items)=>{
        return item.id == newItem.id
    })
    if(item){
        res.status(409).json({message:"l'id est deja pris"})
    }
    else{
        //sensors.push(newSensor);
        db.sensor.insertMany(newItem)
        res.status(200).json({message:`l'id ${newItem.id} a bien été ajouté`})
        console.log(sensors)
    }
});



app.listen(3000, ()=>{
    console.log('server is running on port 3000.')
});