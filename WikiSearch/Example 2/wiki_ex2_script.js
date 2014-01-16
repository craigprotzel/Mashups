/*	NYU - ITP - MASHUPS CLASS
	SPRING 2014
	gihtub.com/craigprotzel/Mashups

	WIKIPEDIA SEARCH - EXAMPLE #2
	Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page
*/


/*	Wrapping the code like this as an IIFE (Immediately invoked Functional Expression) has Pro's and Con's.

	(function(){
		...js code...
	});

	The code will be executed immediately and it will be "protected" from the rest of the app.
	BUT it can make the code within the function inaccessible to the rest of the app.
*/

(function () {
	"use strict";

	//Define the url for the wikipedia API call
	var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
	//Define an intial search term
	var currentWord = "dogs";

	//Define the funnction to execute the AJAX call
	function searchWikipedia(word) {
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

				//Get the template markup
				var tmplMarkup = $('#tmpl-results').html();
				//Tell Underscore to render the template with the appropriate data
				//The key value here - 'results' - is how we reference the data in the template
				var compiledTmpl = _.template(tmplMarkup, { results : data[1] });
				//Update the page
				$("#resultsTarget").html(compiledTmpl);
			}
		});
	}

	//Execute the wikipedia API call function with the correct argument
	searchWikipedia(currentWord);
})();


//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";

	console.log("LOADED!!!!");
});

