//Define a global object to store the space data
var spaceData = {
	ready : false,
	animate : false,
	apiData	: {}
};

//Define a function to execute the AJAX call
function getSpaceData() {
	//Define the url for the API call
	var url = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			spaceData.apiData = {number: 0};
			spaceData.ready = true;
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			spaceData.apiData = data;
			spaceData.ready = true;
		}
	});
}
//Execute the function to make the AJAX call
getSpaceData();

/*---------------------------------------------
p5 Code
----------------------------------------------*/
//Array to store the objects
var astros = [];
var msg = '';

function setup() {
	console.log("Setup");
	msg = createDiv('Getting Space Data...');
	createCanvas(windowWidth, windowHeight);
	msg.addClass('msg');
	
	/*
	//ALT APPROACH - use loadJSON
	loadJSON('http://api.open-notify.org/astros.json', loaded);
	*/
}

/*
//Use with ALT setup approach
function loaded(data){
	console.log("Got the data!");
	console.log(data);
	spaceData.apiData = data;
	spaceData.ready = true;
}
*/

function draw() {
	background(20,40,90);

	if (frameCount < 2){
		console.log("Drawing");
	}
	//Check if the data is ready
	if (spaceData.ready){
		console.log("Data is ready!");
		//Create Astronauts
		if (spaceData.apiData.number === 0){
			//No astronoauts - draw a Sun
			fill(200,175,50);
			ellipse(width/2, height/2, 200,200);
			//Update msg div
			msg.html('No one is in space right now');
		}
		else{
			for (var i=0; i<spaceData.apiData.number; i++) {
				astros[i] = new Astronaut(random(width), random(height), random(20,50), random(60,100), random(-2,2), random(-2,2));
			}
			spaceData.ready = false;
			spaceData.animate = true;
			//Update msg div
			msg.html("There are <span class='big'>" + spaceData.apiData.number + "</span> people in space right now!");
		}
	}
	
	//Start animation once objects are intialized
	if (spaceData.animate){
		for (var j=0; j<astros.length; j++) {
			astros[j].update();
			astros[j].display();
		}

	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

//Astronaut Class
function Astronaut(xPos, yPos, xWidth, yHeight, xSpeed, ySpeed){
	console.log("Making astronauts");
	this.x = xPos;
	this.y = yPos;
	this.xWidth = xWidth;
	this.yHeight = yHeight;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;

	//Define colors
	this.r = Math.round(random(120));
	this.g = Math.round(random(200));
	this.b = Math.round(random(200));
	this.c_random = color(this.r, this.g, this.b);
	this.c_hover = color(255,100,100);
	//Set starting color
	this.c = this.c_random;
}

Astronaut.prototype.display = function(){
	//Draw body
	fill(this.c);
	rectMode(CENTER);
	rect(this.x, this.y, this.xWidth, this.yHeight);
	//Draw eyes
	fill(255);
	ellipse(this.x - this.xWidth/4, this.y - this.yHeight/4, this.xWidth/8, this.yHeight/8);
	ellipse(this.x + this.xWidth/4, this.y - this.yHeight/4, this.xWidth/8, this.yHeight/8);

};

Astronaut.prototype.update = function(){
	this.x += this.xSpeed;
	this.y += this.ySpeed;
	this.checkEdges();
	this.checkHoverState();
};

Astronaut.prototype.checkEdges = function(){
	var widthBoundsLow = -(this.xWidth/2);
	var widthBoundsHigh = windowWidth + (this.xWidth/2);
	var heightBoundsLow = -(this.yHeight/2);
	var heightBoundsHigh = windowHeight + (this.yHeight/2);

	if (this.xSpeed > 0){
		if (this.x > widthBoundsHigh){
			this.x = widthBoundsLow;
		}
	}
	else {
		if (this.x < widthBoundsLow){
			this.x = widthBoundsHigh;
		}
	}

	if (this.ySpeed > 0){
		if (this.y > heightBoundsHigh){
			this.y = heightBoundsLow;
		}
	}
	else {
		if (this.y < heightBoundsLow){
			this.y = height;
		}
	}
};

Astronaut.prototype.checkHoverState = function(){
	if (mouseX > (this.x - this.xWidth/2 - 10) && mouseX < (this.x + this.xWidth/2 + 10) &&
	mouseY > (this.y - this.yHeight/2 -10) && mouseY < (this.y + this.yHeight/2 + 10)){
		this.c = this.c_hover;
		if(mouseIsPressed){
			//Trigger a click event
			this.clicked();
		}
	}
	else{
		this.c = this.c_random;
	}

	/*
	//Alt approach - use the dist() method
	var mouseDist = dist(mouseX, mouseY, this.x, this.y);
	if (mouseDist < 100){
		this.c = this.c_hover;
	}
	else{
		this.c = this.c_random;
	}
	*/
};

Astronaut.prototype.clicked = function(){
	this.xSpeed *= -1;
	this.ySpeed *= -1;
};
