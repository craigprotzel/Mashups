//Array to store the data
var instaTimesData = [];

//Constructor function for IT objects
function InstaTimeObj(nyObj){

	this.nyTimesObj = nyObj;
	this.instagramObj = {};
	this.headline = nyObj.headline.main;
	this.snippet = nyObj.snippet;
	this.img = '';
	this.subject = nyObj.news_desk;

	this.createDomElement = function(){
		var htmlString = '';
		htmlString += '<div class="container">';
		htmlString += '<h3>' + this.headline + '</h3>';
		htmlString += '<img src=' + this.img + ' />';
		htmlString += '<p>' + this.snippet + '</p>';
		htmlString += '</div>';

		//$('#thePaper').append(htmlString);
		var theITA = this;
		theITA.element = $(htmlString).appendTo('#thePaper');
		theITA.element.hover(function(){
			$('h1').html(theITA.headline);
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
	//var instagramURL = 'https://api.instagram.com/v1/media/popular?client_id=' + myInstaKey;
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
				var itObj = new InstaTimeObj(nyTimesData[i]);
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