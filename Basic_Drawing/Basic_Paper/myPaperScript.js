function drawCircles(num){

	//var groupOne = new Group();
	//var groupTwo = new Group();

	var centerX = 100;
	for (var i = 0; i < num; i++){
		var myCircle = new Path.Circle(new Point(centerX, 100), 50);
		myCircle.fillColor = 'yellow';
		//groupOne.addChild(myCircle);

		//Alt way to create a circle
		var circObj = new Path.Circle({
			center: [centerX, 400],
			radius: 50,
			strokeColor: 'blue',
			fillColor: 'aqua'
		});
		//groupTwo.addChild(circObj);
		centerX +=200;
	}
}

var startAnimation = false;
//Paper's onFrame function is similar to Processing's draw function
function onFrame(){
	//We only want this to run once, when the data is ready
	if (spaceData.isReady){
		drawCircles(spaceData.total);
		spaceData.isReady = false;
		startAnimation = true;
		console.log(project.activeLayer);
	}

	//Animation logic goes in here
	if (startAnimation){
		var theCircle = project.activeLayer.children[1];
		if (theCircle.position.y > 800){
			theCircle.position.y = 0;
		}
		else{
			theCircle.position.y += 4;
		}
	}
}