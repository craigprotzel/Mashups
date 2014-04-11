var express = require('express');
// the request library will be used to query CouchDB
var Request = require('request');
// Just like on the client side.
var _ = require('underscore');

var app = express();

// The username you use to log in to cloudant.com
var CLOUDANT_USERNAME="";
// The name of your database
var CLOUDANT_DATABASE="";
// These two are generated from your Cloudant dashboard of the above database.
var CLOUDANT_KEY="";
var CLOUDANT_PASSWORD="";

var CLOUDANT_URL = "https://" + CLOUDANT_USERNAME + ".cloudant.com/" + CLOUDANT_DATABASE

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(app.router);

// Set up Express error handling
app.use(express.errorHandler());

//ROUTES
app.get("/", function(request, response) {
  response.render('index', {title: "Notepad"});
});

// Post route to create a new note.
app.post("/save", function (request, response) {
  console.log(request.body)

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
  }, function (err, res, body) {
    response.json(JSON.parse(body))
  });
});

// API route to get the CouchDB after page load.
app.get("/api/:key", function (request, response) {
  // Get all docs from Cloudant.
  Request.get({
    url: CLOUDANT_URL+"/_all_docs?include_docs=true",
    auth: {
      user: CLOUDANT_KEY,
      pass: CLOUDANT_PASSWORD
    }
  }, function (err, res, body){
    // console.log(body);

    // The JSON comes in the body as a string, we need to parse it first.
    var models = JSON.parse(body).rows;

    // And then filter the results to match the desired key.
    var filtered = _.filter(models, function (m) {
      console.log(m.doc)
      return m.doc.namespace == request.params.key;
    })

    // Now use Express to render the JSON.
    response.json(filtered);
  });
});

// Route to load the view and client side javascript to display the notes.
app.get("/:key", function (request, response) {
  response.render('notes',{title: "Notepad", key: request.params.key});
});

app.listen(3000);
console.log('Express started on port 3000');