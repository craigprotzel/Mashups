
var spaceNum;

function setup() {
	console.log("Setup");
	createCanvas(640, 480);

	//Open Notify API
	var url = "http://api.open-notify.org/astros.json";

	httpDo(url,'GET',null,'jsonp', function(data){
		console.log('Got the data!');
		console.log(data);
		spaceNum = data.number;
		$("#totalPeople").html(spaceNum);
	});
}

function draw() {
	background(50,50,200);
	//Make sure there is data
	if (spaceNum){
		var centerX = 100;
		for (var i = 0; i < spaceNum; i++){
			ellipse(centerX, 200, 50, 50);
			centerX += 60;
		}
	}
	else{
		console.log("Not yet...");
	}
}