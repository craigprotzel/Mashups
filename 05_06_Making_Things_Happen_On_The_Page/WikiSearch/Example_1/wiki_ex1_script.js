/*
NYU - MASHUPS CLASS
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #1
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

This example will immediately search Wikipedia for entries with the word "dogs"
And then populate those results on the page using jQuery
*/

//Define the url for the wikipedia API call
var wikiURL = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
//Define an intial search term
var currentWord = "dogs";

//Define a function to execute the AJAX call
//The argument will be the desired search term
function searchWikipedia(word) {
	console.log("Executing the searchWikipedia function");
	/*
	Use jQuery's ajax method to get the data

	The jQuery ajax method can accept an object as its argument
		$.ajax(objectGoesHere)

	In the example below, we define/pass-in an object that has 5 properties
		- url
		- type
		- dataType
		- error
		- success
	See the jQuery documentation for a full list of acceptable properties
	http://api.jquery.com/jquery.ajax/

	For even more "abstraction", see the jQuery $.getJSON() method
	http://api.jquery.com/jQuery.getJSON/
	*/
	$.ajax({
		url: wikiURL + word, //word is the argument passed into the function
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//Check the browser console to see the returned data
			console.log(data);
			//Use jQuery to insert the search term into the appropriate DOM element
			//The data we want is the first item in the returned JSON, hence value "0"
			$("#searchTerm").html(data[0]);
			//Create a var to save the array of search results 
			//The data we want is the second item in the returned JSON, hence value "1"
			var searchResults = data[1];
			//Loop through our array of results
			for (var i = 0; i < searchResults.length; i++){
				//Create an html string with a tag, class, and the search result
				var htmlString = "<p class='wikiResults'>" + searchResults[i] + "</p>";
				//Use jQuery's append() function to add the searchResults to the DOM
				$("#results").append(htmlString);
			}
		}
	});
}

//Execute the Wikipedia API call function with the currentWord var as the argument
searchWikipedia(currentWord);