//var posX = 0
//var elOne;
//var elTwo;

//This setup function will be called once when the page is ready
function setup() {
	//console.log("Setup");
	
	/*
  //Creates a canvas element on the page with a width and a height
  //This is similar to the size() function in Processing
  createCanvas(windowWidth, windowHeight);
	//Question - Can you write these arguments using jQuery??? 
	*/

	/*
  //ALT - using the p5Dom library
  var canvas = createCanvas(320,240);
  canvas.parent('container');
	*/

	/*
	//Add elements to the page
	elOne = createDiv('This is a div');
	elTwo = createElement('div', 'This is also a div');
	elTwo.attribute('class','notSpecial');
	elTwo.id('special');
	elTwo.mousePressed(toggleClass);
	*/
}

//The draw function will be called every frame after setup is called
function draw() {
	//console.log("Drawing");

	//background(255);
	//ellipse(100,100,50,50);
	//ellipse(mouseX, mouseY,100,100);

	/*
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
	*/
}

/*
function makeEllipse(){
	ellipse(mouseX, mouseY, 50,50);
}
*/

/*
function mousePressed(){
	console.log("X:" + mouseX + " Y:" + mouseY);
	//makeEllipse();

	//Challenge - call a function that will change the color of an ellipse when it is clicked

}

*/

/*
function toggleClass(){
	console.log(elTwo.attribute('class'));
	if(elTwo.attribute('class') == 'notSpecial'){
		elTwo.addClass('highlight');
	}
	else{
		elTwo.removeClass('highlight');
	}
}
*/

/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/