//Function to draw SVGs using D3
function drawD3Astros(totalNum){
	console.log("About to do some D3!");

	var d3SVG = d3.select('#mySVG');
	var centerX = 50;
	for (var i = 0; i <totalNum; i++){
		console.log(i);
		d3SVG.append('circle')
		.attrs({
			"class": "bigCircle",
			"cx" : centerX,
			"cy" : 200,
			"r" : 40
		});

		//Append and animate using transition()
		d3SVG.append('circle')
		.attrs({
			"class": 'smallCircle',
			"cx" : centerX,
			"cy" : 400,
			"r" : 20
		}).transition()
		.attr("cy",550)
		.duration(2000)
		.ease('quad')
		.delay(1000);
		
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

	console.log("Document is ready!");
	// For demonstration purposes - appending to an svg through jquery will NOT work	
	//$('#mySVG').append('<circle class="mainCircle" cx="200" cy="200" r="30"/>');

	/*
	var d3SVG = d3.select('#mySVG');
	var centerX = 5;
	var centerY = 50;
	for (var i = 0; i < 100; i++){
		d3SVG.append('circle')
		.attrs({
			"class": "bigCircle",
			"cx" : centerX,
			"cy" : centerY,
			"r" : 3
		});
		centerX += 10;
		centerY += 10
	}
	*/
	
	//Make request for space data
	getSpaceData();
	
});