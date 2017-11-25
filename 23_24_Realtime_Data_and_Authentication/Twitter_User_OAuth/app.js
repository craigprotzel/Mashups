/*
Basic OAuth 1.0 Example
Uses PassportJS to Authenticate via Twitter and the Request module to execute Data requests
Example based off Jared Hanson's Passport-Twitter Code:
https://github.com/jaredhanson/passport-twitter
https://github.com/passport/express-4.x-twitter-example/blob/master/server.js
*/

// Declare Requirements
var express = require("express"),
bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
cookieParser = require('cookie-parser'),
session = require ('express-session'),
passport = require('passport'),
TwitterStrategy = require('passport-twitter').Strategy,
favicon = require('serve-favicon'),
Twitter = require('twitter');

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

//Cookies must be turned on for sessions
app.use(cookieParser());
app.use(session({secret: 'sessionSecret', cookie: { maxAge: 100000 }, resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

var TWITTER_CONSUMER_KEY = 'YOUR-CONSUMER-KEY-GOES-HERE';
var TWITTER_CONSUMER_SECRET = 'YOUR-CONSUMER-SECRET-GOES-HERE';

//Save oAuthData in an object
var oAuthData = {
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token_key: '',
	access_token_secret: ''	
};
//Initialize client var to use the Twitter lib
var client;

passport.serializeUser(function(user, done) {
	console.log("SERIALIZE!!!");
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	console.log("-----DESERIALIZE-----");
	done(null, obj);
});

passport.use(new TwitterStrategy({
		consumerKey: TWITTER_CONSUMER_KEY,
		consumerSecret: TWITTER_CONSUMER_SECRET,
		callbackURL: "http://localhost:3000/auth/twitter/callback",
	},
	function(tokenPass, tokenSecretPass, profile, done) {
		process.nextTick(function () {
			oAuthData.access_token_key = tokenPass;
			oAuthData.access_token_secret = tokenSecretPass;

			//console.log(profile);

			//Typically you would check for the user in your database
			//But we aren't storing any users
			//So we're just going to return the current user

			return done(null, profile);
		});
	}
));

//Route middleware to make sure a user is authenticated
function checkAuthentication(req, res, next) {
	// If user is authenticated in the session, carry on
	if (req.isAuthenticated()){
		console.log("Good to go!!!");
		return next();
	}
	// If they aren't redirect them to the login page
	res.redirect('/login');
}

//ROUTES
app.get("/", checkAuthentication, function(req, res){
	res.redirect('/success');
});

app.get('/login', function(req,res){
	res.render('login');
});

app.get("/success", checkAuthentication, function(req, res){
	console.log("In success route");

	console.log("---------------------------");
	console.log(req.user);
	console.log("---------------------------");

	//Create the client object to use the twitter package
	if (!client){
		client = new Twitter(oAuthData);		
	}

	//Set request parameters
	var params = {
		screen_name: req.user.username
	};

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

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

//********** Twitter Auth Routes **********//
app.get("/auth/twitter", passport.authenticate('twitter'), function(req, res){
		// The request will be redirected to Twitter for authentication
		// so this function will not be called.
	});

app.get("/auth/twitter/callback", passport.authenticate('twitter', { failureRedirect: '/' }), function(req, res) {
		//Successful Auth
		res.redirect('/success');
	});
//****************************************//

app.get("*", function(req,res){
	res.redirect("/");
});

// Set up Express error handling
app.use(errorHandler());

// Start the server
app.listen(3000);
console.log('Express started on port 3000');