const express = require('express'); // Importing express
const port = 8000;
const app = express();

//has divided into MVC - Model , View and Controller Architechture

//Exporting route
const routes = require('./routes/allRoutes');

//Exporting controller
const controller = require('./controller/todocontroller');
// Database Connection
const db = require('./config/mongoose');
const Task = require('./models/tasks');


// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded())
app.use(express.static('assets'))


// Route Handelers
//Handeler for '/'
app.use(routes);

//app.use(controller);

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server :${err}`);
        return;
    }

    console.log("Server is up And running on port :", port);
})

