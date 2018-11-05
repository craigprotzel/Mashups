var posX;
var speedX;

var posY;
var speedY;

var diameter;

function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(175, 255, 175);
  
  posX = width/2;
  speedX = 4;

  posY = height/2;
  speedY = 3;

  diameter = 50;
}

function draw() {
  // put drawing code here
  background(175, 255, 175);

  noStroke();
  fill(275,175,255);

  ellipse(posX,posY,diameter);

  if (posX > (width - 25)|| posX < 25){
  	speedX = speedX * -1;
  }
  posX = posX + speedX;

  if (posY > (height - 25) || posY < 25){
  	speedY = speedY * -1;
  }
  posY = posY + speedY;
}


function mousePressed(){

	var theDistance = dist(mouseX, mouseY, posX, posY);
	if (theDistance < diameter/2){
		diameter += 10;
	}
	else{
		diameter -= 10;		
	}
}













