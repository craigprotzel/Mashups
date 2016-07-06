//Called once when the page is ready
function setup() {
	console.log("Setup");
	createCanvas(windowWidth, windowHeight);
}

//Called every frame after setup is called
function draw() {

}

//Called every time the mouse if pressed
function mousePressed(){
	console.log("X:" + mouseX + " Y:" + mouseY);
	
}

//Called every time the window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}