var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Set up Express error handling
app.use(express.errorHandler());


//ROUTES
app.get("/", function(request, response) {
  response.render('index');
});

// Post route to create a new note.
app.post("/notes", function (request, response) {

});

// Route get notes based on a key
app.get("/:key", function (request, response) {

});

app.listen(3000);
console.log('Express started on port 3000');
