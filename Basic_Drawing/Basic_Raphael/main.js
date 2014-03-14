//Function to make AJAX call
function getSpaceData() {
	var myURL = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$('#totalPeople').html(data.number);

			//SVG BASED DRAWING
			drawDataRaphael(data.number);
		}
	});
}

//Function to draw SVGs using Raphael
function drawDataRaphael(theData){
	var rafaelSVG = Raphael(0, 0, 600, 600);
	//Basic way to create a circle
	rafaelSVG.circle(300, 100, 50);

	var centerX = 100;
	for (var i = 0; i < theData; i++){
		rafaelSVG.add([
			{
				type: "circle",
				cx: centerX,
				cy: 300,
				r: 50,
				fill: 'aqua'
			}]
		);
		centerX += 200;
	}
}

$('document').ready(function(){
	getSpaceData();
});























