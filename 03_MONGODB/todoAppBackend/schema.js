var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name:  {type:String},
  status: {type: Boolean,default:false},
  date: { type: Date, default: Date.now },
  priority: {type:String}
});

var Task = mongoose.model('Task',taskSchema)

module.exports = {"Task":Task}