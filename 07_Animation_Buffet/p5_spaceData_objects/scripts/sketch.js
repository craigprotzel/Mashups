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
			//console.log(data.status);
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

function setup() {
	console.log("Setup");
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0,50,125);

	//Check if the data is ready
	if (spaceData.ready){
		console.log("Data is ready!");
		//Create Astronauts
		if (spaceData.apiData.number === 0){
			//No astronoauts - draw a Sun
			fill(200,175,50);
			ellipse(width/2, height/2, 200,200);
			//Add text to the page
			var msg = createDiv('No One Is In Space Right Now');
			msg.position(100,100);
		}
		else{
			for (var i=0; i<spaceData.apiData.number; i++) {
				astros[i] = new Astronaut(random(width), random(height), random(20,50), random(60,100), random(), random());
			}
			spaceData.ready = false;
			spaceData.animate = true;
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

	//Define color
	this.r = Math.round(random(100));
	this.g = Math.round(random(255));
	this.b = Math.round(random(200));
	this.c_random = color(this.r, this.g, this.b);
	this.c = this.c_random;
}

Astronaut.prototype.display = function(){
	rectMode(CENTER);
	fill(this.c);
	rect(this.x, this.y, this.xWidth, this.yHeight);
	ellipse(this.x, this.y - this.yHeight, this.xWidth * 2, this.yHeight);
};

Astronaut.prototype.update = function(){
	this.x += this.xSpeed;
	this.y += this.ySpeed;
	this.checkEdges();
	this.checkHover();
};

Astronaut.prototype.checkEdges = function(){
	if (this.xSpeed > 0){
		if (this.x > width){
			this.x = 0;
		}
	}
	else{
		if (this.x < 0){
			this.x = width;
		}
	}

	if (this.ySpeed > 0){
		if (this.y > height){
			this.y = 0;
		}
	}
	else {
		if (this.y < 0){
			this.y = height;
		}
	}
};

Astronaut.prototype.checkHover = function(){
	if (mouseX > this.x - this.xWidth/2 && mouseX < this.x + this.xWidth/2 && mouseY > this.y - this.yHeight/2 && mouseY < this.y + this.yHeight/2){
		this.c = color(255,100,100);
		if(mouseIsPressed){
			console.log(this);
			this.xSpeed *= -1;
			this.ySpeed *= -1;
		}
	}
	else{
		this.c = this.c_random;
	}

	/*
	//Alt approach - use dist()
	var mouseDist = dist(mouseX, mouseY, this.x, this.y);
	if (mouseDist < 100){
		this.c = color(255,100,100);
	}
	else{
		this.c = this.c_random;
	}
	*/
};
