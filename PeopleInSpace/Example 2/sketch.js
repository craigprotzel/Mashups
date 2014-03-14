var canvas;

function setup() {
	canvas = createGraphics(600, 400);
	canvas.position(100,100);
	fill(255,0,0);
}

function draw() {
	//Check if there is data
	if (spaceData.number){
		var centerX = 100;
		for (var i = 0; i < spaceData.number; i++){
			ellipse(centerX, 100, 40, 40);
			centerX += 50;
		}
	}
}