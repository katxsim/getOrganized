var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();


// set up template engine (EJS)
app.set('view engine', 'ejs');

// static files on every route in URL bar
app.use(express.static('./public'));


// fire controllers (app from todoController)
todoController(app);

// listen to port
app.listen(3000);
console.log('listening to port 3000');
