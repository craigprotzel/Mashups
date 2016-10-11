//Global to store the temps
var days;
var h = 300;

function makeD3Chart(dataset){
	//Clear the container each time a new chart is made
	$('#container').html('');

	var barPadding = 20;
	var w = $('#container').width() + barPadding/2;

	var dataMin = d3.min(dataset, function(d){ return d.temp.day; });
	var dataMax = d3.max(dataset, function(d) { return d.temp.day; });

	var yScale = d3.scale.linear()
		.domain([dataMin, dataMax])
		.range([50,h - 50]);

	//Create SVG element
	var svg = d3.select('#container')
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	//Create groups for each data object
	var days = svg.selectAll("g")
		.data(dataset)
		.enter()
		.append("g")
		.attr("id", function(d){
			return d.dt;
		});

	//Add rectangles to each group
	days.append('rect')
		.attr("x", function(d, i) {
			return i * (w / dataset.length) + barPadding/2;
		})
		.attr("y", function(d) {
			return h - (yScale(d.temp.day));
		})
		.attr("width", w / dataset.length - barPadding)
		.attr("height", function(d) {
			return yScale(d.temp.day);
		})
		.attr("fill", function(d){
			var red = Math.min(Math.round(d.temp.day) * 2, 255);
			var color = 'rgb(' + red + ',20,100)';
			//Save this value to the data obj
			d.startFill = color;
			return color;
		});

	//Add text to each group
	days.append("text")
		.text(function(d) {
			return d.temp.day.toString();
		})
		.attr("text-anchor", "middle")
		.attr("x", function(d, i) {
			return i * (w / dataset.length) + (w / dataset.length - barPadding)/2 + barPadding/2;
		})
		.attr("y", function(d) {
			return h - yScale(d.temp.day) + 20;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "white");

	//Set event listeners
	days.on('mouseover', function(d){
		d3.select(this).select('rect')
			.attr("fill", "yellow");
		d3.select(this).select('text')
			.attr("fill", "blue");
	});

	days.on('mouseout', function(d){
		d3.select(this).select('rect')
			.attr("fill", d.startFill);
		d3.select(this).select('text')
			.attr("fill", "white");
	});

	days.on('click', function(d){
		console.log("The temp is " + d.temp.day);
		console.log(this);
		moveTheGroup(this, d, days);
	});
}

function moveTheGroup(theGroupEl, theDataObj, allDataObj){
	console.log(theGroupEl);
	var theHeight = d3.select(theGroupEl).select('rect').attr('height');

	var moveH;
	if (theDataObj.toggle){
		moveH = theHeight - 30;
	}
	else{
		moveH = 0;
	}
	
	//Move individual group
	d3.select(theGroupEl)
		.transition()
		.attr("transform", "translate(0," + moveH + ")")
		.duration(500);
	theDataObj.toggle = !theDataObj.toggle;

	/*
	//Move all the groups
	allDataObj.transition()
		.attr("transform", function(d){
			if(theDataObj.toggle){
				if (d !== theDataObj){
					var moveG = d3.select(this).select('rect').attr('height') - 30;
					return "translate(0," + moveG + ")";
				}
			}
			else{
				console.log("Everybody Up!!!");
				return "translate(0,0)";
			}
		})
		.duration(500);
		theDataObj.toggle = !theDataObj.toggle;
		*/



}

function requestWeatherData(num){

	var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Abu%20Dhabi&mode=json&units=imperial&cnt=' + num;
	var weatherKEY = '&APPID=' + 'YOUR-OPEN-WEATHER-API-KEY';

	$.ajax({
		url: weatherURL + weatherKEY,
		type: 'GET',
		dataType: 'jsonp',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log(data);
			days = data.list;
			//console.log(days);

			days.forEach(function(day){
				day.toggle = 1;
			});

			console.log(days);
			makeD3Chart(days);
		}
	});
}

$(document).ready(function(){
	requestWeatherData(10);

	//Redraw on resize
	$(window).resize(function(){
		console.log("Resizing");
		makeD3Chart(days);
	});
});