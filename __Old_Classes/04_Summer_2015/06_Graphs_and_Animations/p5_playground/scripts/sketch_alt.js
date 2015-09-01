var initP5 = function(sketch){
	//ALL the p5 code goes in here
	sketch.setup = function() {
		//Creates a canvas element on the page with a width and a height
		sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
		console.log("Setup");
	};

	sketch.draw = function() {
		sketch.fill(200,100,100);
		sketch.ellipse(sketch.windowWidth/2,sketch.windowHeight/2, 100,100);
	};

	sketch.windowResized = function() {
		sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
	};
};

var myP5 = new p5(initP5);