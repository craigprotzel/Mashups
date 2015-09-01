/*
NYU - MASHUPS CLASS
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #3
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

This example will immediately search Wikipedia for entries with the word "dog"
And then populate those results on the page using an UNDERSCORE TEMPLATE
Some CSS styling has been added to this example as well 
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

			//Use the Undesrcore Template to add the data to the page
			//Involves 3 steps
			//(1) Get the template markup - use jQuery's html() function to get the markup
			var tmplMarkup = $('#tmpl-results').html();
			//(2) Tell Underscore to render the template with the appropriate data
			//We're using Underscore's built-in template() method to do this
			//Also, the key value here, which we're calling 'results', is how we reference the data in the template
			var compiledTmpl = _.template(tmplMarkup, { results : data[1] });
			//(3) Update the page
			//Use jQuery's html() method to add the markup to the appropriate div
			$("#resultsTarget").html(compiledTmpl);
		}
	});
}

//Execute the wikipedia API call function with the correct search term var as the argument
searchWikipedia(currentWord);