const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/to_do_db');   // to_do_db is db name 

const db = mongoose.connection;

db.on('error',console.error.bind('Error in connecting db'))

db.once('open',function(){
    console.log("Successfully conected to db");
})