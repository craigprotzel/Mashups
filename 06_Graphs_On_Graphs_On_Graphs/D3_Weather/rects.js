var weatherData = [];

function makeD3Chart(dataset){
	//Clear the container each time a new chart is made
	$('#container').html('');

	var w = $('#container').width();
	var h = 300;
	var barPadding = 2;

	// var yScale = d3.scale.linear()
	// 	.domain([d3.min(dataset, function(d) { return d.day; }), d3.max(dataset, function(d) { return d.day; })])
	// 	.range([50,h - 50]);

	//Create SVG element
	var svg = d3.select('#container')
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
			return i * (w / dataset.length);
		})
		.attr("y", function(d) {
			return h - d.day;
			//return h - (yScale(d.day));
		})
		.attr("width", w / dataset.length - barPadding)
		.attr("height", function(d) {
			return d.day;
			//return yScale(d.day);
		})
		.attr("fill", function(d){
			var red = Math.min(Math.round(d.day) * 2, 255);
			//console.log(r);
			var color = 'rgb(' + red + ',20,80)';
			return color;
		})
		.on('click', function(d){
			console.log("The temp is " + d.day);
			d3.select(this)
				.transition()
				.attr("y", h)
				.attr("fill", "blue")
				.duration(1000);
		});

		// .attr("class", "rects")
		// .transition()
		// .attr("y", function(d){
		// 	return h - d.day;
		// })
		// .duration(5000);

	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d) {
			return d.day.toString();
		})
		.attr("text-anchor", "middle")
		.attr("x", function(d, i) {
			return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
		})
		.attr("y", function(d) {
			return h - d.day + 10;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "white");
}

function requestWeatherData(num){
	var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Abu%20Dhabi&mode=json&units=imperial&cnt=' + num;
	$.ajax({
		url: weatherURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log(data);
			var days = data.list;
			//console.log(days);

			//Make an array with just the temps
			var temps = _.map(days, function(day){
				return day.temp;
			});
			console.log(temps);
			makeD3Chart(temps);
		}
	});
}

$(document).ready(function(){
	requestWeatherData(10);
});