var bodyParser = require('body-parser');



var data = [{item: '221: Finish PA3'}, {item: 'Walk the dog'}, {item: 'Impress 436I TA\'s'}]

//Midiware we want to run in post request
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){


    app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
    });


    // fired when Ajax request is made
    app.post('/todo', urlencodedParser, function(req, res){
    // sending updated data back to frontend
        data.push(req.body);
        res.render('todo', {todos: data});
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
        // returns true or false -- if true, stays in array, if not delete
        res.render("todo", { todos: data });
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    });

};
