const express = require("express");
const server = express();
const PORT = 8080;
const mongoose = require("mongoose");

//CONNECTION

mongoose.connect("mongodb://localhost:27017/PhotoGram",{ useNewUrlParser: true });


//////CARD

//SCHEMA
const cardSchema = new mongoose.Schema({
    caption : {type:String,required:true},
    photo: {type:String,required:true}
})

//MODEL
const Card =  mongoose.model('Card',cardSchema);

// API
server.get("/",(req,res)=>{
        let c1 = new Card();
    c1.caption = req.query.caption;
    c1.photo= req.query.photo;

    c1.save(function(err,data){
        if(err){
            res.json({status:"card not saved"})
        }else{
            res.json(c1);
        }
});
})

server.listen(PORT,()=>{
    console.log("started on PORT number :", PORT);
})