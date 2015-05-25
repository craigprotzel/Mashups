var express = require('express');
var Request = require('request');
var bodyParser = require('body-parser');

var app = express();

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
// Enable json body parsing of application/json
app.use(bodyParser.json());

//******* DATABASE Configuration *******
// The username you use to log in to cloudant.com
var CLOUDANT_USERNAME="";
// The name of your database
var CLOUDANT_DATABASE="";
// These two are generated from your Cloudant dashboard of the above database.
var CLOUDANT_KEY="";
var CLOUDANT_PASSWORD="";

var CLOUDANT_URL = "https://" + CLOUDANT_USERNAME + ".cloudant.com/" + CLOUDANT_DATABASE;

//******* ROUTES *******
// GET - route to load the main page
app.get("/", function (request, response) {
	console.log("In main route");
	response.render('index', {title: "Notepad"});
});

// POST - route to create a new note.
app.post("/save", function (request, response) {
	console.log("Making a post!");
	// Use the Request lib to POST the data to the CouchDB on Cloudant
	Request.post({
		url: CLOUDANT_URL,
		auth: {
			user: CLOUDANT_KEY,
			pass: CLOUDANT_PASSWORD
		},
		headers: {
			"Content-Type": "application/json; charset=utf-8"
		},
		body: JSON.stringify(request.body)
	},
	function (err, res, body) {
		if (res.statusCode == 201){
			console.log('Doc was saved!');
			//Need to parse the body string
			var parsed = JSON.parse(body);
			response.json(parsed);
		}
		else{
			console.log('Error: '+ res.statusCode);
			console.log(body);
		}
	});
});

// GET - API route to get the CouchDB data after page load.
app.get("/api/:key", function (request, response) {
	var theNamespace = request.params.key;
	console.log('Making a db request for namespace ' + theNamespace);
	// Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: CLOUDANT_URL+"/_all_docs?include_docs=true",
		auth: {
			user: CLOUDANT_KEY,
			pass: CLOUDANT_PASSWORD
		}
	}, function (err, res, body){
		// Need to parse the body string
		var theBody = JSON.parse(body);
		var theData = theBody.rows;

		// And then filter the results to match the desired key.
		var filteredData = theData.filter(function (d) {
			return d.doc.namespace == request.params.key;
		});
		// Now use Express to render the JSON.
		response.json(filteredData);
	});
});

// GET - Route to load the view and client side javascript to display the notes.
app.get("/:key", function (request, response) {
	console.log("In key...");
	response.render('notes',{title: "Notepad", key: request.params.key});
});

// GET - Catch All route
app.get("*", function(request,response){
	response.send("Sorry, nothing to see here.");
});

app.listen(3000);
console.log('Express started on port 3000');