var weatherData = [];

//D3 Code
function makeD3Chart(dataset){
	//Clear the page each time a new chart is made
	$('body').html('');

	var w = $(window).width()/2;
	var h = 300;
	var barPadding = 2;

	var yScale = d3.scale.linear()
		.domain([d3.min(dataset, function(d) { return d.min; }), d3.max(dataset, function(d) { return d.max; })])
		.range([100,h - 100]);

	//Create SVG element
	var svg = d3.select("body")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	//Create g 'groups' for the different types of circles
	var minTemps = svg.append("g")
		.attr("class", "minTemps");
	var maxTemps = svg.append("g")
		.attr("class", "maxTemps");

	//Plot the maxTemps
	svg.selectAll("maxTemps")
		.data(dataset)
		.enter()
		.append("circle")
		.attr("cx", function(d, i) {
			return i * (w / dataset.length) + 20;
		})
		.attr("cy", function(d) {
			return h - yScale(d.max);
		})
		.attr("r", 6);

	//Plot the minTemps
	svg.selectAll("minTemps")
		.data(dataset)
		.enter()
		.append("circle")
		.attr("cx", function(d, i) {
			return i * (w / dataset.length) + 20;
		})
		.attr("cy", function(d) {
			return h - yScale(d.min);
		})
		.attr("r", 6);
}

//AJAX Request for Weather Data
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
			//console.log(temps);
			makeD3Chart(temps);
		}
	});
}

$(document).ready(function(){
	requestWeatherData(10);
});