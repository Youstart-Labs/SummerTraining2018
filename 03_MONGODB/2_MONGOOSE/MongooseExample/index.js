const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const url = 'mongodb://localhost:27017/NewTaskDb';
const mongoose = require("mongoose");
const Schema  = require("./schema/schema");
const Task = Schema.Task;
const List = Schema.List;
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.static('public'));

app.get("/list",function(req,res){
    let list1 = new List();
    list1.name = "shopping";
    list1.status = true;
    list1.save();
})

app.get("/task",function(req,res){
    List.findOne({name:"reading"},function(err,doc){
        let task1 = new Task({title:"buy shoes",status:true,list:doc.id});
        task1.save();
    })
    
})

app.get("/tasks",function(req,res){
    Task.find({}).populate('list').exec(function(err,docs){
        res.json(docs);
    })
})



app.listen(8080,function(){
    console.log("server started");
})
