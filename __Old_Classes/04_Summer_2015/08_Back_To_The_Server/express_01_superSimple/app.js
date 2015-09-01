//Set up requirements
var express = require('express');
//Create an 'express' object
var app = express();

//Declare a route
app.get('/', function(request, response){
	response.send('We are good to go!');
});

//Start the server
app.listen(3000);
//Write a message to the TERMINAL CONSOLE
console.log("Express App running at localhost:3000");