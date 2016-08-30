var bgColor = 255;
var randomColor;
var shapeWidth = 30;
var shapeHeight = 30;

//Boolean to toggle shape
var makeEllipse = true;

function getRandomColor(){
	var r = random(50,240);
	var g = random(50,220);
	var b = random(50,230);
	return color(r,g,b);
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	//Make a color on page load
	randomColor = getRandomColor();
	background(bgColor);
}

function draw(){
}
	
//----------MOUSE EVENTS----------//
function mouseMoved() {
	fill(randomColor);
	noStroke();
	var curShape = '';
	if (makeEllipse){
		ellipse(mouseX, mouseY, shapeWidth, shapeHeight);
		curShape = 'ellipse';
	}
	else{
		rect(mouseX, mouseY, shapeWidth, shapeHeight);
		curShape = 'rect';
	}
	var adjustedX = mouseX/windowWidth;
	var adjustedY = mouseY/windowHeight;

	//Function that 'emits' data to the server
	grabAndSend(curShape, adjustedX, adjustedY, randomColor);
}

function mousePressed(){
	randomColor = getRandomColor();
	makeEllipse = !makeEllipse;
}

//----------CLIENT-SIDE SOCKET CODE----------//
//Init socket object
var socket = io();

//Receive data from the server using .on()
socket.on('news', function (data) {
	//console.log(data);
	drawData(data);
});

function drawData(data){
	noStroke();
	var socketColor = color(data.fill[0], data.fill[1], data.fill[2]);
	var drawX = data.pos[0] * windowWidth;
	var drawY = data.pos[1] * windowHeight;
	fill(socketColor);
	if (data.shapeType == 'ellipse'){
		ellipse(drawX, drawY, shapeWidth, shapeHeight);
	}
	else{
		rect(drawX, drawY, shapeWidth, shapeHeight);
	}
	fill(randomColor);
}

//Send data to the server using .emit()
function grabAndSend(shape, posX, posY, curFill){
	var rgba = curFill.rgba;
	var data = {
		shapeType: shape,
		pos: [posX, posY],
		fill: rgba
	};
	socket.emit('drawing', data);
}

//----------WINDOW RESIZE-----------//
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(bgColor);
}