var express = require('express');
var path = require('path');
var Request = require('request');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(app.router);
// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));

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

app.get("/api/:key", function (request, response) {
  Request.get({
    url: CLOUDANT_URL+"/_all_docs?include_docs=true",
    auth: {
      user: CLOUDANT_KEY,
      pass: CLOUDANT_PASSWORD
    }
  }, function (err, res, body){
    var models = JSON.parse(body).rows;

    var filtered = _.filter(models, function (m) {
      return m.doc.namespace == request.params.key;
    })

    response.json(filtered);
  });
});

// Route get notes based on a key
app.get("/:key", function (request, response) {
  response.render('notes',{title: "Notepad", key: request.params.key});
});

app.listen(3000);
console.log('Express started on port 3000');
