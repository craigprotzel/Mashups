/*
NYU - MASHUPS CLASS
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #5
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

This example creates an object that will search Wikipedia for a user submitted entry
And then populate those results on the page as hyperlinks using an UNDESRSCORE TEMPLATE
*/

//Create a global app object
var myApp = {
	wikiURL : "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
};

//Add a method to the global app object that will execute the Wikipedia AJAX call
myApp.searchWikipedia = function(currentTerm){
	var self = this;
	$.ajax({
		url: self.wikiURL + currentTerm,
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
};

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";
	console.log("LOADED!!!!");

	//Use jQuery to assign a callback function when the 'search' button is clicked
	$("#search").click(function(){
		console.log("Clicked search");
		//Use jQuery to get the value of the 'query' input box
		var newSearchTerm = $("#query").val();
		console.log(newSearchTerm);
		//Execute the Wikipedia API call with the 'newSearchTerm' string as its argument 
		myApp.searchWikipedia(newSearchTerm);
	});

	//What if someone just wants to click "ENTER"?
	//Use jQuery to assign a callback function when enter is pressed 
	//This will ONLY work when the 'query' input box is active
	$("#query").keypress(function(e){
		//If enter key is pressed
		if (e.which == 13){
			//Use jQuery's trigger() function to execute the click event
			$("#search").trigger('click');
		}
	});
});