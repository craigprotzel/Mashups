//Set up requirements
var express = require("express");
var logger = require('morgan');
var Request = require('request');

//Create an 'express' object
var app = express();

//Some Middleware - log requests to the terminal console
app.use(logger('dev'));

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

app.use(function(req,res,next){
	console.log('A Request Has Come In. Hooray!!!');
	next();
});

//ROUTES
app.get("/", function(req, res){
	res.render('index', {message: "Try adding a forward slash plus a word to the url"});
});

app.get("/:word", function(req, res){
	var currentWord = req.params.word;
	var requestURL = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + currentWord;
	Request(requestURL, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log(body);
			var theData = JSON.parse(body);
			console.log(theData);
			//Grab the names
			var theNames = theData[1];
			if (theNames.length){
				//Send the names only to the page
				res.json(theNames);
			}
			else{
				//If there is no data
				res.json({data: null, code: "MASHUPS ERROR"});
			}
		}
		else{
			res.send("Uh oh. Something went wrong. Try another word.");
		}
	});
});

app.get("*", function(req, res){
	res.send('Sorry, nothing doing here.');
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');