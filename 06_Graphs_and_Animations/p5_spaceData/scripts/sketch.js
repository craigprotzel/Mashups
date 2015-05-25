//Define a global object to store the space data
var spaceData = {};

//Define a function to execute the AJAX call
function getSpaceData() {
	//Define the url for the API call
	var url = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
			spaceData.number = 0;
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$("#totalPeople").html(data.number);
			spaceData.number = data.number;
		}
	});
}
//Execute the function to make the AJAX call
getSpaceData();


/*---------------------------------------------
p5 Code
----------------------------------------------*/
function setup() {
	console.log("Setup");
	createCanvas(960, 540);
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
	else{
		console.log("No data yet");
	}
}