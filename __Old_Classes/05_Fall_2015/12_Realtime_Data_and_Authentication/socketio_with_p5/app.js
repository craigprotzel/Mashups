//Set up requirements
var express = require("express");
var Request = require('request');
var bodyParser = require('body-parser');
var _ = require('underscore');
var favicon = require('serve-favicon');

//Create an 'express' object
var app = express();
app.use(favicon(__dirname + '/public/media/favicon.ico'));
//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Enable json body parsing of application/json
app.use(bodyParser.json());

var port = 3000;
// Start the server & save it to a var
var server = app.listen(3000);
//Pass the server var as an arg to the 'io' init requirement
var io = require('socket.io')(server);
console.log('Express started on port ' + port);

/*-----
ROUTES
-----*/
//Main Page Route
app.get("/", function(req, res){
	res.render('index');
});

//Main Socket Connection
io.on('connection', function (socket) {
 //console.log('a user connected');
	socket.on('drawing', function (data) {
		socket.broadcast.emit('news', data);
		//console.log(data);
  });
});