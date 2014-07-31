//SETUP
// Decalre Requirements
var express = require("express");
//Create the app
var app = express();

// Set up the view directory
app.set("views", __dirname);

// Set EJS as templating language WITH html as an extension)
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

/*
//ALT - Set EJS as templating language WITHOUT html as an extension
app.set('view engine', 'ejs');
*/

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