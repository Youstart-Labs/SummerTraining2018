var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  name:  String,
});


var taskSchema = new Schema({
    title:  String,
    status:Boolean,
    date: { type: Date, default: Date.now },
    list: { type: Schema.Types.ObjectId, ref: 'List' },

    
  });
  
var List = mongoose.model('List', listSchema);
var Task = mongoose.model('Task', taskSchema);

module.exports = {"List":List,"Task":Task}