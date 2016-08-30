/////////////////////////////////////////////////////////////////////////////////////////////////////
// A view of the ~1600 votes made by the U.S. House of Representatives during the 112th Congress 
// Using the Sunlight Foundation Congress API -- http://sunlightlabs.github.io/congress/
// As well as D3.js, and JQuery.
/////////////////////////////////////////////////////////////////////////////////////////////////////

//A bunch of global variables to be assigned value or used later on.
var w,h,margin,svg,g_axes,g_votes,total_votes,timeline,dataBubble,
previous_month = -Infinity,
previous_year = -Infinity,
apikey = "FILL WITH YOUR SUNLIGHT FOUNDATION CONGRESS APIKEY",
stupid_questions = ["Call of the House", "Election of the Speaker"],
totalDem = 192,
totalRep = 242;



////////////////////////////////////////////////////////////////
// D3 variables
////////////////////////////////////////////////////////////////
//scales
var  yScale = d3.scale.linear();
	//There are two functions that need to be added to a scale for it to be useful...
	//the domain, which is the "extent" or min and max of the dataset -- values to be input
	//.domain([0,100])
	//and the range, which is the "extent" or min and max of the desired result -- values to be output
	//.range([0,1000]);
var xPercent = d3.scale.linear().domain([0,100]);
// //Line function definition to be used when drawing simple path.
// var lineFunction = d3.svg.line()
//     .x(function(d) { return d.x; })
//     .y(function(d) { return d.y; });





function yeaInit(){
	//Set some initial values.
	margin={top:20,right:46,bottom:40,left:46};
	//Width of the client window
	w=$(window).width();
	//Height of the client window - the header height
	h=$(window).height()-$('#articleHeader').outerHeight();

	//The floating panel that appears when mousing over a vote.
	// dataBubble = $('#dataBubble');

	//Set the output range of the x and y scales.
	xPercent.range([0,(w*0.5)-margin.left]);
	yScale.range([margin.top,h-margin.bottom]);
	
	//Create an svg!!!
	svg = d3.select('#yeaVis').append('svg')
        .attr('id', 'SVG')
        .attr('width', w)
        .attr('height', h)
    
    //Make a g layer for the votes
    g_votes = svg.append("g").attr('id', 'g_votes')
    //Make a g layer for the axes
    g_axes = svg.append("g").attr('id', 'g_axes')

    //Swap the level of the the g layers on mouseeneter and mouseleave
    // svg.on('mouseenter', function(){svg.node().appendChild(g_votes.node())})
    // svg.on('mouseleave', function(){svg.node().appendChild(g_axes.node())})

    //Get the timeline ready.
    // startTimeLine();
    //Get some data.
    getCongressData(1);
}


function getCongressData(n){
	//the n argument will set the page in the query.
	var sunlight_url = "https://congress.api.sunlightfoundation.com/votes?apikey="+
	apikey+"&congress=112&chamber=house&per_page=50&page="+
	n+"&fields=chamber,year,voted_at,congress,breakdown,question,result,source";

	$.ajax({
		url: sunlight_url,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data.status);
		},
		success: function(data){
			total_votes = data.count;
			//Now that we have the total numberg of votes, we can set the domain for the y axis
			yScale.domain([0,total_votes]);
			
			//Some functions to draw using the data.
			simpleOutput(data,n);
			//centeredView(data,n);
			
			//Recursion!!! 
			//If we aven't hit our final number of pages, keep calling getCongressData.
			//if(n<33) setTimeout( function(){getCongressData(n+1)} , 1 );
		}
	});
}


function simpleOutput(data,n){
	//The arguments are the data from the last ajax call and it's page index.
	console.log(n);
	//Shortcut for the results.
	res = data.results
	//Loop through the results and draw a ciclre for each.
	for(i in res){
		//if it is a stupid question, skip to the next index in the results.
		if(stupid_questions.indexOf(res[i].question)!=-1) continue;

		//In this case i is a string and needs to be made into an integer.
		//Calculate the y center coordinate.
		cy = (parseFloat(i)+(n-1)*50)*0.25;//yScale(parseFloat(i)+(n-1)*50)//
		//We are multiplying by 50 because there are 50 votes in each query.
		g_votes.append("circle")
			.attr({
				"class": "basicCirc", //give it a class
				"cx": res[i].breakdown.total.Yea, //use the amount of Yeas for the center x coordinate. 
				"cy": cy, //center y coordinate
				"r": 4 //and the radius
			});

	}
}

function centeredView(data,n){
	//The arguments are the data from the last ajax call and it's page index.
	//console.log(n);
	//Shortcut for the results.
	res = data.results
	//Loop through the results and draw a ciclre for each.

	for(i in res){
		//if it is a stupid question, skip to the next index in the results.
		if(stupid_questions.indexOf(res[i].question)!=-1) continue;

		//Calculate what percent of each respective party voted Yea.
		demPercent = (res[i].breakdown.party.D.Yea / totalDem) * 100;
		repPercent = (res[i].breakdown.party.R.Yea / totalRep) * 100;
		//Calculate the spread (difference between the two percents).
		spread = Math.abs(repPercent-demPercent);
		//Decide if the support was more Democrat or Republican.
		pull = (repPercent>demPercent)? "REP" : "DEM";
		//Set the value that will be the circle's distance from the center (to the right if REP and the left of DEM).	
		fromCenter = (pull=="REP")? xPercent(spread) : xPercent(spread)*-1;

		// console.log(i+" dem = "+demPercent+", rep = "+repPercent)
		// console.log(pull)

		//What is this votes over all index of the total 1600?
		//We are multiplying by 50 because there are 50 votes in each query.
		totalIndex = parseFloat(i)+(n-1)*50
		cy = yScale(totalIndex)//(parseFloat(i)+(n-1)*50)*0.25
		// g_votes.append("circle")
		// 	.attr({
		// 		"class": "basicCirc",
		// 		"cx": w*0.5+(fromCenter),
		// 		"cy": cy,
		// 		"r": 4
		// 	});
		
		//Use the joined 'result' as the class to distinguish color (the options are 'Passed'.'Failed',or 'AgreedTo')
		outcome = res[i].result.split(" ").join("");

		circ = g_votes.append("circle")
			.attr({
				"class": "basicCirc "+outcome,
				"cx": w*0.5, //w*0.5+(fromCenter)
				"cy": cy,
				"r": 4,
				"opacity": 1 //0
			});

		//Make an object for each vote.
		new VoteCircle(res[i], circ, {x:w*0.5+(fromCenter), y:cy});
		//You probably want to save these into a global array like all_votes.push( new VoteCircle(res[i], circ, {x:w*0.5+(fromCenter), y:cy}); )

		//Animate the cicles at a staggered pace.
		// staggerCX(circ, totalIndex, fromCenter);
		//Update the timeline
		// updateTimeline(cy, res[i].voted_at);
	}
}

function staggerCX(circ, tI, fC){
	//setTimeout() takes a function as the first argument and a time-to-wait as the second.
	setTimeout( function(){
			//A D3 transition.
			//Use a selected element, tell it it's a transition, give it s duration, then set the attributes you want to change.
			circ.transition().duration(555).attr("cx", w*0.5+(fC)).attr('opacity',1);
		}, tI*1
	);
}

function startTimeLine(){
	//Array of two objects that have the x and y coordinated of the start and end of the line.
	//In this case the x's and y's are the same, so you won't see anything.
	linedata = [{x:w*0.5, y:10}, {x:w*0.5, y:10}];
	//linedata = [{x:w*0.5, y:10}, {x:100, y:200}, {x:500, y:500}]; //crazy triangle
	timeline = g_axes.selectAll('path')
	   .data([linedata])
	   .enter()
	   .append('path')
	   .attr('d', lineFunction)
	   .attr('class', 'timeline');
}
function updateTimeline(cy, voteTime){
	//Spliting the text from the "voted_at" value from the data.
	//A string has the function to be split(),which takes a delimiter argument (on which to split the text up). 
	//In this case a hyphen.
	dateParts = voteTime.split("-");
	//dateParts[0] is the year
	//dateParts[1] is the month

	//Give the line some new data -- the argument cy will be the new end y coord.
	linedata = [{x:w*0.5, y:10}, {x:w*0.5, y:cy}];
	//A D3 transition using new data instead of attributes (also known as an 'update').
	timeline.data([linedata]).transition().duration(555).attr('d', lineFunction);

	//Some logic to makesure I'm only rendering the text of ever thrid month (fallible because of the async queries).
	if(previous_month+3 < parseInt(dateParts[1]) || previous_year < parseInt(dateParts[0])){
		previous_month = parseInt(dateParts[1]);
		previous_year = parseInt(dateParts[0]);
		setTimeout( function(){addADate(cy, dateParts[0], dateParts[1]);}, 555);
	}
}

function addADate(cy, d1, d2){
	//Two of virtually the same text.
	//The first one has a fat stroke around it to make it easier to see the second one, which is normal.
	g_axes.append("text")
			.attr({
			    x: w*0.5,
			    y: cy,
			    class: 'voteTimeBack'
			})
			.text(d1+" / "+d2);
	g_axes.append("text")
		.attr({
		    x: w*0.5,
		    y: cy,
		    class: 'voteTime'
		})
		.text(d1+" / "+d2);
}


////Vote Object
var VoteCircle = function(data, circ, coords){
  //"this" is the VoteCircle object itself. 
  //It's good to save it in a variable here so it doesn't get confused with any other "this" anywhere else in the object.
  var self = this;
  //The svg element is officially (and publicly) added to the object.
  //Publicly, meaning it can be accessed from anywhere inside and outside the object.
  self.circ = circ;

  function init(){
  	//Assign some event listeners to the svg element. 
  	self.circ.on('mouseenter', self.showMyData)
  	self.circ.on('mouseleave', self.hideMyData)
  }

  self.showMyData = function(){
  	//Add the class that reveals the dataBubble.
  	dataBubble.addClass('unhide');
  	//Add the class that puts a black stroke around the vote circle.
  	self.circ.classed('selected', true);
  	//Cut the element from wherever it is in the order of circles and paste it at the top within g_votes 
  	//(so no other circles are on top of it).
    g_votes.node().appendChild(self.circ.node());
    //The specific order I want the results in.
    vote_types = ["Yea","Nay","Not Voting"];
    //Insert the question from the dtaa into the dataBubble.
    dataBubble.find('h4').text(data.question);
    //Save the party part of the object into a variable as a shortcut for later use. 
  	p = data.breakdown.party
  	//Loop through party keys ("D" and "R"). 
  	for(key in p){
  		party_results = '';
  		//Loop through vote_types and append an <li> tag to party_results for each.
  		for(type in vote_types){
  			party_results += '<li>'+p[key][vote_types[type]]+'</li>'	
  		}
  		//Then after the vote_types loop, add the string of <li> tags to the #party-D <ul>, then the #party-R <ul>.
  		$('#party-'+key).html(party_results)
  	}
  	//Use the passed in coord.x to know where the circle is, then subtract the width of half the bubble to center it on the circle.
  	l = coords.x-dataBubble.outerWidth()*0.5;
  	//If the resulting l position is less than 0 (off the page to the left),
  	//reset it to zero.
  	//Otherwise, if the l position is greater than w, (off the page to the right), 
  	//reset it w.
  	//Else, l is fine as is.
  	l = (l<0)? 0 : (l+dataBubble.outerWidth()>w)? w-dataBubble.outerWidth() : l;
  	//MOVE THE BUBBLE!!! 
  	dataBubble.css({left: l, top: coords.y-6-dataBubble.outerHeight()})
  }

  self.hideMyData = function(){
  	//Remove the class that reveals the dataBubble.
  	dataBubble.removeClass('unhide');
  	//Remove the class that puts a black stroke around the vote circle.
  	self.circ.classed('selected', false);
  }

  //This sets off the init function when the when the object is instantiated.
  init();
  //You're probably going to want to use this object, so return it too.
  return self
}


$(document).ready(function(){
   yeaInit();
})
