// Decalre Requirements
var express = require("express");
//Create the app
var app = express();

// Set up the view directory
app.set("views", __dirname);
// Set EJS as templating language
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

//ROUTES
app.get("/", function(request, response){
	response.render('index');
});

app.get("/yo", function(request, response) {
	response.render("yo", { message: "YOOOO!!!" });
});

app.get("/:term", function(request, response) {
	var currentTerm = request.params.term;
	response.render("other", { message: currentTerm });
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');