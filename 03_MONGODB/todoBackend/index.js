const express = require("express");
const logger = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient
const cors = require("cors");
const url = 'mongodb://localhost:27017';
let DB;
MongoClient.connect(url, function(err, client) {

console.log(err)

 DB = client.db("TaskList");

})


//asdsads
// const products = [{name:"iphone",price:40000},
// {name:"samsung s9",price:50000}]

app.use(logger());
app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'));


app.get("/find",function(req,res){
    DB.collection('players').find({}).toArray(function(err,result){
        console.log(result);
    })
    res.json({name:"hello"})
})

app.get("/search",function(req,res){

   let q = req.query.q;
   DB.collection('players').find({name:q}).toArray(function(err,result){
    res.json(result);
})


})

app.post("/task",function(req,res){
    let task = req.body;
    DB.collection("tasks").insertOne(task,function(err,r){
        res.json(r);
    })


})


app.post("/tasks",function(req,res){
    DB.collection("tasks").find({}).toArray(function(err,r){
        res.json(r);
    })


})

app.listen(8080,function(){
    console.log("server started");
})
