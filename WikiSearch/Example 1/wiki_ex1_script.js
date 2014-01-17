/*	

NYU - ITP - MASHUPS CLASS
SPRING 2014
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #1
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

*/

//Define the url for the wikipedia API call
var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
//Define an intial search term
var currentWord = "dogs";

//Define the funnction to execute the AJAX call
function searchWikipedia(word) {
	"use strict";

	$.ajax({
		url: url + word,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);

			//Insert the first array item returned as text in the DOM element with the id 'searchTerm'
			$("#searchTerm").html(data[0]);

			//Create a var for the array of search results returned as the second item in the data array
			var searchResults = data[1];
			//Loop through the array of results to add them to the DOM element with the id 'results'
			for (var i = 0; i < searchResults.length; i++){
				//Create a string that has a tag, a class, and the search result 
				$("#results").append("<p class='wikiResults'>" + searchResults[i] + "</p>");
			}
		}
	});
}

//Execute the wikipedia API call function with the correct argument
searchWikipedia(currentWord);

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";
	console.log("LOADED!!!!");
});