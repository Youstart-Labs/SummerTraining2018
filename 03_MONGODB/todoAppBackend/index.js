const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const logger = require("morgan");
const cors = require("cors");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testTodo',{ useNewUrlParser: true });

app.use(logger());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const schema = require("./schema");
const Task = schema.Task;

app.post('/task',function(req,res){
          console.log(req.body)
    let t1 = new Task(req.body);
    t1.save(function(){
        res.json(t1);
    });
})

app.get('/tasks',function(req,res){
      Task.find({},function(err,r){
          res.json(r)
      })
})



app.delete('/task/:id',function(req,res){
    console.log(req.params.id)
    Task.findOneAndRemove({_id:req.params.id},function(err,r){
        console.log(err);
        res.json(r);
    })
})


app.listen(8080,function(){
    console.log("server started");
})