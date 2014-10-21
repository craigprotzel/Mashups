var p5Data = {
	traffic: {},
	ready: false,
	startAnimation: false
};

//Lat-Lon for Los Angeles
//var losAngeles = [ 34.063855, -118.403135];

//Function to make traffic request
function makeTrafficRequest(theBox){
	console.log("Getting traffic data");
	var key = 'Fmjtd%7Cluurnu07nq%2C8x%3Do5-9wrguw';
	var theBoxString = theBox[0] + ',' + theBox[1] + ',' + theBox[2] + ',' + theBox[3];
	var url = 'http://www.mapquestapi.com/traffic/v2/incidents?boundingBox=';
	url += theBoxString;
	url += '&filters=construction,incidents&inFormat=kvp&outFormat=json&key=';
	url += key;

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("Oh no!!!! Didn't work...");
			//Give a message that ther'es no social data about oceans
		},
		success: function(data){
			console.log("Traffic Data");
			console.log(data);
			p5Data.traffic = data.incidents;
			p5Data.ready = true;
		}
	});

}

//Function to get user's location
function askForLocation(){
	//Define a success function
	function success(data){
		console.log(data);
		var position = [data.coords.latitude, data.coords.longitude];
		var distance = 10;
		var boundingBox =	getBoundingBox(position,distance);
		console.log(boundingBox);
		makeTrafficRequest(boundingBox);
	}
	//Define an error function
	function error(data){
		console.log(data);
		p5Data.ready = true;

	}
	//Check if navigator is available
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	}
	else {
		//Not supported, provide fallback
		p5Data.ready = true;
	}
}


/*----------------------------------------------------------*/
//p5 Code
var cars = [];
var theData;
var titleDiv;

function setup() {
	console.log("Setup");
	askForLocation();
	//Creates a canvas element on the page with a width and a height
	titleDiv = createDiv('Getting Traffic Info...');
	titleDiv.addClass('center');
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//Do this only once when the data is ready
	if (p5Data.ready){
		createCars(p5Data.traffic);
		p5Data.ready = false;
	}
	//Do this after the cars have been created
	if (p5Data.startAnimation){
		background(220, 100, 190);
		for (var i=0; i<cars.length; i++) {
			cars[i].move();
			cars[i].display();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/*
Code taken from Lauren McCarthy's Github Repo for itp-creative-js
https://github.com/lmccart/itp-creative-js
https://github.com/lmccart/itp-creative-js/blob/master/week2/03_array_of_objects/sketch.js
*/

function createCars(trafficData){
	var theSpeed;
	if (trafficData.length>0){
		theSpeed = 1;
		titleDiv.elt.innerHTML = "Uh oh, looks like there's traffic";
	}
	else{
		theSpeed = 5;
		titleDiv.elt.innerHTML = "No Traffic Around Here!";
	}
	//Initialize Cars
	for (var i=0; i<10; i++) {
		cars[i] = new Car(random(255), random(width), random(height), theSpeed);
	}
	p5Data.startAnimation = true;
}

// Car class
function Car(tempC, tempXpos, tempYpos, tempXspeed) {
	this.c = tempC;
	this.xpos = tempXpos;
	this.ypos = tempYpos;
	this.xspeed = tempXspeed;
}

Car.prototype.display = function() {
	stroke(0);
	fill(this.c);
	rectMode(CENTER);
	rect(this.xpos,this.ypos,100, 50);
};

Car.prototype.move = function() {
	this.xpos = this.xpos + this.xspeed;
	if (this.xpos > width + 50) {
		this.xpos = -50;
	}
};
