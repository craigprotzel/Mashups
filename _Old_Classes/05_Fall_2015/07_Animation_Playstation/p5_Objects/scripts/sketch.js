var blocksArray = [];

//Called once when the page is ready
function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 10; i++){
		var aBlock = new Blocks();
		blocksArray.push(aBlock);
	}
}

//Called every frame after setup is called
function draw() {
	background(255);
	for (var i = 0; i < blocksArray.length; i++){
		blocksArray[i].run();
	}
}
