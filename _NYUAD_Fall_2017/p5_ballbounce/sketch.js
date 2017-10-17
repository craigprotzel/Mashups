var posX = 0;
var speedX = 5;

var posY = 0;
var speedY = 10;


function setup() {
	createCanvas(800,600);
	background(180,100,150);
}

function draw() {
	background(180,100,150);

	noStroke();
	fill(245,160,30);
	ellipse(mouseX,mouseY,50,50);

	fill(50,150,250);
	ellipse(posX,posY,50,50);
	posX = posX + speedX;
	posY = posY + speedY;

	if(posX > width || posX < 0){
		speedX = speedX * -1;
	}
	if(posY > height || posY < 0){
		speedY = speedY * -1;
	}
}