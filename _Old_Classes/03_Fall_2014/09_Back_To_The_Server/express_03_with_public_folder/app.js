//Set up requirements
var express = require("express");
var logger = require('morgan');

//Create an 'express' object
var app = express();

//Some Middleware - log requests to the terminal console
app.use(logger('dev'));

//Set up the views directory
app.set("views", __dirname);
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get("/", function(request, response){
	response.render('index', {message: "Try adding a forward slash plus a word to the url"});
});

app.get("/:word", function(request, response){
	var currentWord = request.params.word;
	response.render('index',{message: currentWord});
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');
