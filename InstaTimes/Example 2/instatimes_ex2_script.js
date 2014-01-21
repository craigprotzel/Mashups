/*
NYU - ITP - MASHUPS CLASS
SPRING 2014
gihtub.com/craigprotzel/Mashups
 
INSTATIMES - A NY Times + Instagram Mashup
NY Times API Reference - http://developer.nytimes.com/page
Instagram API Reference - http://instagram.com/developer/
Developer Keys for BOTH APIs are necessary to execute the final script

Example 2:
- Add in NY Times API request functionality
- Create InstaTimesArticle objects within the NY Times function
*/

//Create a constructor function for the main object
//Constructor functions are best distinguished by capitalizing the function name
//Add an argument to the constructor that will be the value of the 'title'
function InstaTimesArticle(curHeadline){
	"use strict";
	this.title = curHeadline;
	this.img = "http://www.warmaal.com/wp-content/uploads/2013/12/breaking-news-logo.jpg";
}

//Create a global array to hold all of the InstaTimesArticle objects
var instaTimes = [];

//Define a function to execute the NY Times AJAX call
function getNYTimesData(){

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
			if (!(data.response.docs instanceof Array )){
				console.log("Huh??? Data is not an array");
				return;
			}
			else {
				nyTimesArticles = data.response.docs;
				//console.log(nyTimesArticles);
			}
			var tempArticleObj;
			for(var i = 0; i < nyTimesArticles.length; i++){
				//console.log(i + " : " + nyTimesArticles[i].headline.main);
				tempArticleObj = new InstaTimesArticle(nyTimesArticles[i].headline.main);
				instaTimes.push(tempArticleObj);
				$("#latestUpdates").append(
					//This is one long string of HTML markup broken into multiple lines for readability
					"<div class='articleBox'>" +
						"<p class='articleTitle'>" +
							tempArticleObj.title +
						"</p>" +
						"<img class='articleImg' src=" + tempArticleObj.img + ">" +
					"</div>"
				);
			}
		}
	});
}

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";
	$("#update").click(function(){
		console.log("Clicked Update");
		//Use jQuery to clear out all the previous items
		$("#latestUpdates").empty();
		//Execute the NY Times function
		getNYTimesData();
	});
});