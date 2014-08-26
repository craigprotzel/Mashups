var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.send('We are good to go!');
});

app.listen(3000);
console.log("Express App running at localhost:3000");