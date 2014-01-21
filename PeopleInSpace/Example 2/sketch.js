var canvas;

function setup() {
	canvas = createGraphics(600, 400);
	canvas.position(100,100);
	fill(255,0,0);
}

function draw() {
	for (var i = 0; i < spaceData.number; i++){
		var offset = 60;
		ellipse(100 + (offset * i), 100, 40, 40);
	}

}