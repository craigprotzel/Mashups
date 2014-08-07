// Decalre Requirements
var express = require("express"),
		auth = require("basic-auth");

//Create the app
var app = express();

// Set up the view directory
app.set("views", __dirname);

// Set EJS as templating language WITH html as an extension)
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// Set up some super simple basic authentication middleware
var authConfig = {user: 'nyu', password: 'mashups'};

//Call a function on specific routes
function superSimpleAuth(req, res, next){
	var user = auth(req);
	if (user === undefined || user['name'] !== authConfig.user || user['pass'] !== authConfig.password) {
		res.statusCode = 401;
		res.send('Unauthorized');
	}
	else {
		next();
	}
}

/*
//Set a function to be called on all routes
app.use(function(req, res, next) {
	var user = auth(req);
	if (user === undefined || user['name'] !== authConfig.user || user['pass'] !== authConfig.password) {
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
app.get("/", function(request, response){
	response.render('index');
});

app.get("/secret", superSimpleAuth, function(request, response){
	response.render('secret', {secretWord: 'TOP SECRET ONE'});
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');