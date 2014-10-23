function drawCircles(num){

	var groupOne = new Group();
	var groupTwo = new Group();
	//Add an extra property to identify the group
	groupOne.name = 'groupOne';
	groupTwo.name = 'groupTwo';

	var centerX = 100;
	for (var i = 0; i < num; i++){
		var myCircle = new Path.Circle(new Point(centerX, 100), 50);
		myCircle.fillColor = 'yellow';
		groupOne.addChild(myCircle);

		//Alt way to create a circle
		var circObj = new Path.Circle({
			center: [centerX, 400],
			radius: 50,
			strokeColor: 'blue',
			fillColor: 'aqua'
		});
		groupTwo.addChild(circObj);
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
		//console.log(project.activeLayer);
	}

	//Animation logic goes in here
	if (startAnimation){
		var height = project.view.viewSize.height;
		var theCircle = project.activeLayer.children[1];
		var theCircleHeight = theCircle.bounds.height;
		if (theCircle.position.y > height){
			theCircle.position.y = -1 * theCircleHeight;
		}
		else{
			theCircle.position.y += 3;
		}
	}
}

function onMouseDown(event) {
	//console.log(event);
	var hitResult = project.hitTest(event.point);
	//console.log(hitResult);

	if (hitResult){
		var theItem = hitResult.item;
		console.log(theItem);
		if (theItem.parent.name == 'groupOne'){
			console.log('Hit a group one item');
			//do something
		}
		else if (theItem.parent.name == 'groupTwo'){
			console.log('Hit a group two item');
			//do something
		}
	}
	
}