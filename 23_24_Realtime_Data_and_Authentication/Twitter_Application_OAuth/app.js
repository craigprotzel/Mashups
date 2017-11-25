// Declare Requirements
var express = require("express"),
bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
Twitter = require('twitter'),
favicon = require('serve-favicon');

//Create the app
var app = express();

// Set up the views directory
app.set("views", __dirname + '/views');
// Set EJS as templating language, but allow for .html extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to public folder for css & js files
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/media/favicon.ico'));

app.use(bodyParser.json());

// Set up Express error handling
app.use(errorHandler());
// Start the server
app.listen(3000);
console.log('Express started on port: ' + 3000);

/********************************
Twitter App Info
********************************/
var TWITTER_CONSUMER_KEY = 'YOUR-TWITTER-CONSUMER-KEY';
var TWITTER_CONSUMER_SECRET = 'YOUR-TWITTER-CONSUMER-SECRET';
var TWITTER_ACCESS_TOKEN_KEY = 'YOUR-TWITTER-ACCESS-TOKEN-KEY';
var TWITTER_ACCESS_SECRET = 'YOUR-TWITTER-ACCESS-SECRET';

var client = new Twitter({
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token_key: TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: TWITTER_ACCESS_SECRET
});

//For this example, hard code a user's twitter handle
var params = {
	screen_name: 'craigprotzel'
};

//ROUTES
app.get("/", function(req, res){
	res.render('index');
});

//Using the 'Twitter' lib - https://www.npmjs.com/package/twitter
app.get("/search", function(req, res){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (error){
			throw error;
		}
		//console.log(tweets);
		console.log(tweets[0].text);
		var theTweet = {'tweet': tweets[0].text };
		res.json(theTweet);
	});
});

app.get("*", function(req,res){
	res.redirect("/");
});