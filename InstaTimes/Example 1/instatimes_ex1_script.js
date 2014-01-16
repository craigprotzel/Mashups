/*	NYU - ITP - MASHUPS CLASS
	SPRING 2014
	gihtub.com/craigprotzel/Mashups
 
	INSTATIMES - A NY Times + Instagram Mashup
	NY Times API Reference - http://developer.nytimes.com/page
	Instagram API Reference - http://instagram.com/developer/

	Example 1:
		- Hardcode the basic functionality of the end result
		- Lay the foundation for our app's main object
		- Get the main object(s) to properly appear on the page
*/

//Create a constructor for the main object
//Constructor functions are best distinguished by capitalizing the function name

function InstaTimesArticle(){
	"use strict";
	//Create two properties - Title & Image - both with hardcoded values for now
	this.title = "Top News";
	this.img = "http://www.warmaal.com/wp-content/uploads/2013/12/breaking-news-logo.jpg";
}

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";

	//Use jQuery to listen for a click on the "update" button
	$("#update").click(function(){
		//Create an InstaTimesArticle object
		var testArticle = new InstaTimesArticle();
		//Ude jQuery to add the object to the DOM
		$("#latestUpdates").append(
			//This is one long string of HTML markup
			//I've broken it up into multiple lines for readability
			"<div class='articleBox'>" +
				"<p class='articleTitle'>" +
					testArticle.title +
				"</p>" +
				"<img class='articleImg' src=" + testArticle.img +">" +
			"</div>"
		);
	});
	console.log(testArticle);
});



