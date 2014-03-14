function drawCircles(num){
	var centerX = 100;
	for (var i = 0; i < num; i++){
		var myCircle = new Path.Circle(new Point(centerX, 100), 50);
		myCircle.fillColor = 'yellow';
		//Alt way to create a circle
		var circObj = new Path.Circle({
			center: [centerX, 400],
			radius: 50,
			strokeColor: 'blue',
			fillColor: 'aqua'
		});
		centerX +=200;
	}
}

var startAnimation = false;

function onFrame(){
	//This is only called ONCE - when the data is ready
	if (dataIsReady){
		drawCircles(spaceData.total);
		dataIsReady = false;
		startAnimation = true;
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














