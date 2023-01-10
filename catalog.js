const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { items } = require('./models');
app.use(express.json());

require('dotenv').config();

process.env.MONGO_HOST

//connection
const db = require('./models');

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

/*app.get("/catalogs", (req,res)=>{
    //montrer tous les catalogues
    //client: READ ONLY
    //resto: il a des boutons pour CRUD complet
});*/

app.get("/catalog/:idr", (req,res)=>{
    var idr = req.params.idr;
    var menusList;
    var itemsList;
    db.menus.find({id_restaurant:idr}).then((menus)=>{
        menusList = menus;
        db.items.find({id_restaurant:idr}).then((e)=>{
            itemsList = e
            res.status(200).json({menusList , itemsList});
            
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
    }).catch(()=>{
        res.status(404).json({message: 'sensor not found'});
    })
    
    
    

    //montrer le catalogue de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});



app.get("/catalog/:idr/menus", (req,res)=>{
    var idr = req.params.idr;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
    db.menus.find({id_restaurant:idr}).then((e)=>{
        res.status(200).json(e);
    }).catch(()=>{
        res.status(404).json({message: 'sensor not found'});
    })
});

app.get("/catalog/:idr/menu/:numm", (req,res)=>{
    var numm = req.params.numm;


    db.menus.find({id:numm}).then((e)=>{
            res.status(200).json(e);
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
    

    //montrer un menu spécifique de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
});
app.get("/catalog/:idr/articles", (req,res)=>{
    var idr = req.params.idr;
    //montrer les menus de la boutique id
    //CLIENT: READ ONLY
    //RESTO: CREATE READ UPDATE DELETE
    db.items.find({id_restaurant:idr}).then((e)=>{
        res.status(200).json(e);
    }).catch(()=>{
        res.status(404).json({message: 'sensor not found'});
    })
});

app.get("/catalog/:idr/article/:numa", (req,res)=>{
    var numa = req.params.numa;
    db.items.find({id:numa}).then((e)=>{
            res.status(200).json(e);
        }).catch(()=>{
            res.status(404).json({message: 'sensor not found'});
        })
});
app.post("/article", (req,res)=>{
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

app.post("/menu", (req,res)=>{
    console.log(req.body)
    var newMenu = {
        id: req.body.numm,
        id_restaurant:req.body.idr,
        picture:req.body.picture,
        name: req.body.name,
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



app.listen(3000, ()=>{
    console.log('server is running on port 3000.')
});