//Function to draw SVGs using D3
function drawD3Astros(totalNum){
	console.log("D3!");
	var d3SVG = d3.select('#mySVG');
	var centerX = 50;
	for (var i = 0; i <totalNum; i++){
		d3SVG.append('circle')
		.attr({
			"class": "mainCircle",
			"cx" : centerX,
			"cy" : 200,
			"r" : 40
		});

		d3SVG.append('circle')
		.attr({
			"class": 'eyeCircles',
			"cx" : centerX,
			"cy" : 400,
			"r" : 20
		})
		.transition()
		.attr("cy",500)
		.duration(3000)
		.delay(500);

		centerX += 100;
	}
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
			$('#totalPeople').html(data.number);
			drawD3Astros(data.number);
		}
	});
}

$('document').ready(function(){
	getSpaceData();
});