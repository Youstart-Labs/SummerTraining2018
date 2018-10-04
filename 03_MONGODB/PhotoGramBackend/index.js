const express = require("express");
const server = express();
const PORT = 8080;
const mongoose = require("mongoose");
const bodyParser= require("body-parser");

//CONNECTION

mongoose.connect("mongodb://localhost:27017/PhotoGram",{ useNewUrlParser: true });



server.use(bodyParser.json());




//////CARD

//SCHEMA
const cardSchema = new mongoose.Schema({
    caption : {type:String,required:true},
    photo: {type:String,required:true}
})

//MODEL
const Card =  mongoose.model('Card',cardSchema);


//SCHEMA
const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    photo: {type:String},
    email: {type:String,required:true,unique:true},
    pass: {type:String,required:true},
})

//MODEL
const User =  mongoose.model('User',userSchema);




// API

server.post("/user",(req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.photo= req.body.photo;
    user.email = req.body.email;
    user.pass = req.body.pass;


    user.save(function(err,data){
    if(err){
        res.json({status:"user not saved"})
    }else{
        res.json(user);
    }
});
})


server.post("/card",(req,res)=>{
        let c1 = new Card();
    c1.caption = req.body.caption;
    c1.photo= req.body.photo;

    c1.save(function(err,data){
        if(err){
            res.json({status:"card not saved"})
        }else{
            res.json(c1);
        }
});
})


server.get("/users",(req,res)=>{
    User.find({},(err,users)=>{
        res.json(users)
    })
})

server.get("/cards",(req,res)=>{
    Card.find({},(err,cards)=>{
        res.json(cards)
    })
})


server.get("/card/:id",(req,res)=>{
    Card.findOne({_id:req.params.id},(err,card)=>{
        res.json(card)
    })
})


server.put("/user/:email",(req,res)=>{

    User.findOneAndUpdate(
        {email:req.params.email},
        {$set:{name:"batman"}},
        {new:true},
        (err,user)=>{
            res.json(user)

    });

})

server.delete("/card/:id",(req,res)=>{

    console.log(req.params)
    Card.findOneAndDelete(
        {_id:req.params.id},
        (err,card)=>{
            console.log(err)
            res.json(card)

    });

})



server.listen(PORT,()=>{
    console.log("started on PORT number :", PORT);
})