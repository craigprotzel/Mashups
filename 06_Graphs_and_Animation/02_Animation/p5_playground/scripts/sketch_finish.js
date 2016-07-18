var posX = 0
var elOne;
var elTwo;

//Called once when the page is ready
function setup() {
	console.log("Setup");
	
  //createCanvas(windowWidth, windowHeight);

	//ALT - using the p5Dom library
  var canvas = createCanvas(800,400);
  canvas.parent('container');
	
	//Add elements to the page
	elOne = createDiv('This is a div');
	elTwo = createElement('div', 'This is also a div');
	elTwo.attribute('class','notSpecial');
	elTwo.id('special');
	elTwo.mousePressed(toggleClass);
	
}

//Called every frame after setup is called
function draw() {
	//console.log("Drawing");
	background(255);
	ellipse(100,100,50,50);
	ellipse(mouseX, mouseY,100,100);

	noStroke();
	fill(100,100,255);
	rect(windowWidth/2,50,100,100);
	rect(posX,200,100,100);
	if (posX > windowWidth){
		posX = -100;
	}
	else{
		posX += 10;
	}
}

function makeEllipse(){
	ellipse(mouseX, mouseY, 50,50);
}

function mousePressed(){
	console.log("X:" + mouseX + " Y:" + mouseY);
	makeEllipse();
}

function toggleClass(){
	console.log(elTwo.attribute('class'));
	if(elTwo.attribute('class') == 'notSpecial'){
		elTwo.addClass('highlight');
	}
	else{
		elTwo.removeClass('highlight');
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
