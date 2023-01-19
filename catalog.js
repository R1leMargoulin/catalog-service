const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { items, menus } = require('./models');
const cors = require('cors')



const routerItems = require("./routes/items")
const routerMenus = require("./routes/menus")
require('dotenv').config();
process.env.MONGO_HOST


app.use(express.json());
app.use(cors())
app.use("/menus", routerMenus)
app.use("/articles", routerItems)

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
});

app.get("/catalog/find/:id", (req,res)=>{
    var id = req.params.id;
    db.menus.find({_id:id}).then((menu)=>{
        if(menu.length==0){
            db.items.find({_id:id}).then((item)=>{
                if(item.length==0){
                    res.status(404).json({message:"not found"})
                }
                else{
                    res.status(200).json(item);
                }
            })
        }
        else{
            res.status(200).json(menu);
        }
    }).catch(()=>{
            res.status(404).json({message: 'not found'});
    });
});





app.listen(3000, ()=>{
    console.log('server is running on port 3000.')
});