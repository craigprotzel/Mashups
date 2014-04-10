// Decalre Requirements
var express = require("express");
var path = require('path');
//Create the app
var app = express();

// Set up the view directory
app.set("views", __dirname);
// Set EJS as templating language
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to public folder for css & js files
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.get("/", function(request, response){
	response.render('index',{message: "Try adding a forward slash plus a word to the url"});
});

app.get("/:word", function(request, response){
	var currentWord = request.params.word;
	response.render('index',{message: currentWord});
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');


