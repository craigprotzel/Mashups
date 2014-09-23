//Array to store the data
var instaTimesData = [];

//Constructor function for InstaTimes objects
function InstaTimesObj(nyObj){

	//Main object properties
	this.nyTimesObj = nyObj;
	this.instagramObj = {};
	this.headline = nyObj.headline.main;
	this.snippet = nyObj.snippet;
	this.img = '';
	this.subject = nyObj.news_desk;

	//A method to call on the object to generate HTML and bind event handlers
	this.createDomElement = function(){
		var htmlString = '';
		htmlString += '<div class="container">';
		htmlString += '<h3>' + this.headline + '</h3>';
		htmlString += '<img src=' + this.img + ' />';
		htmlString += '<p>' + this.snippet + '</p>';
		htmlString += '</div>';

		//Note: Helpful to set 'this' equal to a var when working with jQuery
		var theITA = this;
		//Using jQuery's '.appendTo' returns the (jquery wrapped) element that is created, 
		//Which you can save to the parent object and attach event listeners to
		theITA.element = $(htmlString).appendTo('#thePaper');
		theITA.element.mouseover(function(){
			$('h1').html(theITA.headline);
		});
		theITA.element.mouseout(function(){
			$('h1').html('The InstaTimes');
		});
		theITA.element.click(function(){
			//alert(theITA.headline);
			window.open(theITA.nyTimesObj.web_url, '_blank');
		});
	};
}

//Instagram API Request
function getInstagramData(theObj){
	var myInstaKey = 'YOUR-API-KEY-GOES-HERE';
	var curTag = theObj.subject;
	var instagramTagSearchURL = 'https://api.instagram.com/v1/tags/' + curTag + '/media/recent?client_id=' + myInstaKey;

	$.ajax({
		url: instagramTagSearchURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("Oh no");
		},
		success: function(data){
			console.log("WooHoo Instagram");
			console.log(data);

			$("#loading").hide();

			theObj.instagramObj = data.data[0];
			theObj.img = data.data[0].images.low_resolution.url;
			theObj.createDomElement();
		}
	});
}

//NY Times API Request
function getNYTimesData(){
	var myNYTimesKey = 'YOUR-API-KEY-GOES-HERE';
	var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&sort=newest&api-key=' + myNYTimesKey;

	$.ajax({
		url: nyTimesURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("Oh no...");
		},
		success: function(data){
			console.log("WooHoo NY Times");
			console.log(data);
			var nyTimesData = data.response.docs;

			//Make InstaTimes objects
			for(var i = 0; i < nyTimesData.length; i++){
				var itObj = new InstaTimesObj(nyTimesData[i]);
				instaTimesData.push(itObj);
			}
			//Make Instagram API requests for each InstaTimes object
			for (var j = 0; j < instaTimesData.length; j++){
				getInstagramData(instaTimesData[j]);
			}
		}
	});
}


$(document).ready(function(){
	console.log("We are ready!");
	//Make request to NY Times API (on page load)
	getNYTimesData();
});