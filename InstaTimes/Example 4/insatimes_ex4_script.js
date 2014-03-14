/*
NYU - ITP - MASHUPS CLASS
SPRING 2014
gihtub.com/craigprotzel/Mashups
 
INSTATIMES - A NY Times + Instagram Mashup
NY Times API Reference - http://developer.nytimes.com/page
Instagram API Reference - http://instagram.com/developer/
Developer Keys for BOTH APIs are necessary to execute the final script

Example 4:
- Add Events directly to the objects

Code for this example was contributed by Jeremy Scott-Diamond
https://github.com/JSDiamond
*/

//Create a constructor function for the main object
//Constructor functions are best distinguished by capitalizing the function name
//Add a second argument to the constructor for the article snippet
//Set the img property to an empty string
function InstaTimesArticle(curHeadline, curSnippet){
	"use strict";
	var ITA = this;
	ITA.title = curHeadline;
	ITA.text = curSnippet;
	ITA.img = "";

	ITA.createDomElement = function(){
		//This is one long string of HTML markup broken into multiple lines for readability
		var htmlString = "<div class='articleBox'>" +
							"<p class='articleTitle'>" +
								ITA.title +
							"</p>" +
							"<div class='contentBox'>" +
								"<img class='articleImg' src=" + ITA.img + ">" +
								"<p class='articleText'>" +
									ITA.text+
								"</p>" +
							"</div>" +
						"</div>";
		//Using .appendTo returns the (jquery wrapped) element that is created, so you can save it to the object
		ITA.element = $(htmlString).appendTo("#latestUpdates");
		//Assign events to object functions
		ITA.element.on('click',ITA.eventAction);
		ITA.element.on('mouseover',ITA.elementOver);
		ITA.element.on('mouseout',ITA.elementOut);
	};

	ITA.eventAction = function(){
		//show some info in console
		console.log(ITA.title);
		console.log(ITA.img);
		//Change the background based on the obj image
		var imageURL = "url(" + ITA.img + ")";
		$('body').css('backgroundImage', imageURL );
		//animate the dom element, fade-out and fade-in
		ITA.element.stop().animate({opacity:0.5},555,'swing',
			function(){ ITA.element.stop().animate({opacity:1},555,'swing');
		});
	};

	ITA.elementOver = function(){
		//add border (assuming there is a class in css that gives a border)
		ITA.element.addClass('bordered');
	};

	ITA.elementOut = function(){
		//remove border
		ITA.element.removeClass('bordered');
	};
}

//Create a global array to hold all the InstaTimesArticle objects
var instaTimes = [];

//Define the function to execute the NY Times AJAX call
function getNYTimesData() {
	"use strict";
	var nyTimesSearchURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&sort=newest&api-key=';
	var myNYKey = 'YOUR-DEVELOPER-KEY-GOES-HERE';

	$.ajax({
		url: nyTimesSearchURL + myNYKey,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//console.log(data);

			var nyTimesArticles;
			//Check to make sure the data is correct
			if (!(data.response.docs instanceof Array )){
				console.log("Huh??? NY Times Data is not an array");
				//Exit the function if the data is not an array
				return;
			}
			else {
				nyTimesArticles = data.response.docs;
				//console.log(nyTimesArticles);
			}

			var tempArticleObj;
			for(var i = 0; i < nyTimesArticles.length; i++){
				tempArticleObj = new InstaTimesArticle(nyTimesArticles[i].headline.main, nyTimesArticles[i].snippet);
				instaTimes.push(tempArticleObj);
			}
			//*****************************//
			//Execute the Instagram API Call
			getInstagramData();
			//*****************************//
		}
	});
}

//Define the function to execute the Instagram AJAX call
function getInstagramData() {
	"use strict";
	var curTag = 'news';
	var myInstaKey = 'YOUR-DEVELOPER-KEY-GOES-HERE';
	var instagramTagSearchURL = 'https://api.instagram.com/v1/tags/' + curTag + '/media/recent?client_id=' + myInstaKey;
	//Alt Instagram API Endpoint
	var instagramPopularSearchURL = 'https://api.instagram.com/v1/media/popular?client_id=' + myInstaKey;

	$.ajax({
		url: instagramTagSearchURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//console.log(data);

			var instagramData;
			//Check to make sure the data is correct
			if (!(data.data instanceof Array )){
				console.log("Huh??? Instagram data is not an array");
				console.log(data);
				//Exit the function if the data is not an array
				return;
			}
			else {
				instagramData = data.data;
				for (var i = 0; i < instaTimes.length; i++){
					instaTimes[i].img = instagramData[i].images.thumbnail.url;
					//Let the object handle this, that way it can keep track of it's associated components.
					instaTimes[i].createDomElement();
				}
			}
		}
	});
}

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";
	$("#update").click(function(){
		console.log("Clicked Update");
		//Clear the instaTimes array
		instaTimes = [];
		//Use jQuery to clear out the previous items
		$("#latestUpdates").empty();
		//Execute the API Call
		getNYTimesData();
	});
});