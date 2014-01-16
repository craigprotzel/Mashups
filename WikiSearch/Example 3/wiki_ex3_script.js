/*	NYU - ITP - MASHUPS CLASS
	SPRING 2014
	gihtub.com/craigprotzel/Mashups

	WIKIPEDIA SEARCH - EXAMPLE #3
	Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page
*/


//Create a global app object that will be accessible anywhere in our code
var myApp = {};

//Create a method for the global app object
myApp.searchWikipedia = function(currentTerm){
	var url =  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
	$.ajax({
		url: url + currentTerm,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$("#searchTerm").html(data[0]);

			//Get the template markup
			var tmplMarkup = $('#tmpl-results').html();
			//Tell Underscore to render the template with the appropriate data
			//The key value - 'results' - is how the data is referenced in the template
			var compiledTmpl = _.template(tmplMarkup, { results : data[1] });
			//Update the page
			$("#resultsTarget").html(compiledTmpl);
		}
	});
};


//Code to be executed once the page has fully loaded
$(document).ready(function(){
	"use strict";

	console.log("LOADED!!!!");

	//Use jQuery to assign a callback function for when the search button is clicked
	$("#search").click(function(){
		console.log("Clicked search");
		console.log($("#query").val());

		//Get the value of the 'query' input box
		var newSearchTerm = $("#query").val();
		//Execute the wikipedia API call with the 'newSearchTerm' string as the argument 
		myApp.searchWikipedia(newSearchTerm);
	});

	//What if someone just wants to click "ENTER"?
	//Use jQuery to assign a callback function for when the enter button 
	//This will ONLY work when the 'query' input box is active
	$("#query").keypress(function(e){
		//If enter key is pressed
		if (e.which == 13){
			$("#search").trigger('click');
		}
	});

});

