//Function to draw SVGs using Raphael
function drawDataRaphael(theData){

	//Create the SVG
	var raphaelSVG = Raphael(0, 50, 800, 400);
	//Basic way to create a circle
	raphaelSVG.circle(200, 100, 50);

	var centerX = 100;
	for (var i = 0; i < theData; i++){
		raphaelSVG.add([
			{
				type: "circle",
				cx: centerX,
				cy: 250,
				r: 20,
				fill: 'aqua'
			}]
		);
		centerX += 60;
	}
	//Add another SVG
	var secondRaphaelSVG = Raphael(0,550,400,200);
}

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
			$('#totalPeople').html(data.number + ' people');

			//SVG BASED DRAWING
			drawDataRaphael(data.number);
		}
	});
}

$('document').ready(function(){
	getSpaceData();
});