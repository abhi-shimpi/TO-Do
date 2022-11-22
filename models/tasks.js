const mongoose = require('mongoose');  // importing mongoose

const tasksSchema = new mongoose.Schema({   // schema for database

    name:{
        type : String,
        required :true
    },
    dropdown :
    {
        type : String,
        required : true
    },
    date :{
        type :Date,
        required :true
    }
});

const Task = mongoose.model('Task',tasksSchema);

module.exports = Task;