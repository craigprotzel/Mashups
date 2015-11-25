/*
Basic OAuth 1.0 Example
Uses PassportJS to Authenticate via Twitter and the Request module to execute Data requests
Example based off Jared Hanson's Passport-Twitter Code:
https://github.com/jaredhanson/passport-twitter
*/

// Declare Requirements
var express = require("express"),
bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
Request = require('request'),
_ = require('underscore'),
cookieParser = require('cookie-parser'),
session = require ('express-session'),
passport = require('passport'),
TwitterStrategy = require('passport-twitter').Strategy,
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
	token: '',
	token_secret: ''
};

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
			oAuthData.token = tokenPass;
			oAuthData.token_secret = tokenSecretPass;

			//console.log(profile);

			//Typically you would check for the user in our database
			//But we aren't storing any users
			//So just going to return the current user

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

	//console.log("---------------------------");
	//console.log(req.user);
	//console.log("---------------------------");
	
	//Make a request to twitter for most recent tweet
	var userID = req.user.id;
	var tweetURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=" + userID + "&count=1";
	Request.get(
		{
			url: tweetURL,
			oauth: oAuthData,
			json: true
		},
		function (err, resTwit, body) {
			console.log("Tweet Response");
			console.log(body);
			//Respond with this line to show json on the page
			// res.json(body);

			//Respond with these lines to show success.html
			res.render('success',
				{	user: body[0].user.screen_name,
					lastTweet: body[0].text
				});
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