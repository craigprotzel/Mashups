// Decalre Requirements
var express = require("express");
var auth = require("basic-auth");

//Create the app
var app = express();

// Set up the view directory
app.set("views", __dirname + '/views');
// Set EJS as templating language WITH html as an extension)
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Set up some super simple basic authentication middleware
var authConfig = {
	user: 'nyuad',
	password: 'mashups'
};

//OPTION ONE
//A function to be used as middleware
function superSimpleAuth(req, res, next){
	var user = auth(req);
	if (user === undefined || user['name'] !== authConfig.user || user['pass'] !== authConfig.password) {
		res.statusCode = 401;
		res.setHeader('WWW-Authenticate', 'Basic realm="Please enter info below"');
		res.send('Unauthorized');
	}
	else {
		next();
	}
}

/*
//OPTION TWO
//Call a function on all routes
app.use(function(req, res, next) {
	var user = auth(req);
	if (user === undefined || user['name'] !== authConfig.user || user['pass'] !== authConfig.password) {
		console.log("Nope!");
		res.statusCode = 401;
		res.setHeader('WWW-Authenticate', 'Basic realm="Please enter info below"');
		res.send('Unauthorized');
	}
	else {
		next();
	}
});
*/

//ROUTES
app.get("/", function (request, response){
	response.render('index');
});

app.get("/secret", superSimpleAuth, function (request, response){
	response.render('secret', {secretWord: 'TOP SECRET'} );
});

app.get("*", function (request,response){
	response.redirect("/");
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');