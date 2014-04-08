// Decalre Requirements
var express = require("express");
//Create the app
var app = express();

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up Express error handling
app.use(express.errorHandler());

//ROUTES
app.get("/", function(request, response){
	response.render('index');
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');
