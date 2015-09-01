/*
NYU - MASHUPS CLASS
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #2
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

This example will immediately search Wikipedia for entries with the word "dog"
And then populate those results on the page using jQuery
Styling has been added
*/

//Define the url for the wikipedia API call
var wikiURL = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
//Define an intial search term
var currentWord = "dogs";

//Define a funnction to execute the AJAX call
//The argument will be the desired search term
function searchWikipedia(word) {
	//Use jQuery to make the AJAX call
	$.ajax({
		url: wikiURL + word,
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
			//The data we want is the second item in the returned JSON, hence value "1"
			//Create a var to save the array of search results 
			var searchResults = data[1];
			//Loop through the array of results
			for (var i = 0; i < searchResults.length; i++){
				var htmlString = "<p class='wikiResults'>" + searchResults[i] + "</p>";
				//Use jQuery's append() function to add the searchResults to the DOM
				$("#results").append(htmlString);
			}
		}
	});
}

//Execute the wikipedia API call function with the correct search term var as the argument
searchWikipedia(currentWord);