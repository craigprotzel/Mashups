/*	
NYU - ITP - MASHUPS CLASS
SPRING 2014
gihtub.com/craigprotzel/Mashups

PEOPLE IN SPACE - EXAMPLE #1
Open-Notify.org - http://open-notify.org/Open-Notify-API/People-In-Space/
*/

//Define the url for the API call
var url = "http://api.open-notify.org/astros.json";

//Define a function to execute the AJAX call
function getSpaceData() {

	/*
	An alt way to write the above line would be the following:
		var getSpaceData = function(){
	For this class, we will use the 'function nameOfFunction() {' syntax 
	*/

	//Include thE 'use strict;' statement in your functions in quotes with a trailing semicolon
	//It will require/encourage more uniform js style
	"use strict";

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

	For even more abstraction, see the jQuery $.getJSON() method
	http://api.jquery.com/jQuery.getJSON/
	*/

	$.ajax({
		//Define the url to make the request
		url: url,
		//Define the type of request - if you leave this out, it will default to be a GET
		type: 'GET',
		//Define the type of data to be returned
		//We're using JSONP to get around the Cross Origin Access Issues
		dataType: 'jsonp',
		//Do this if the repsonse is an error
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		//Do this if the response is a success
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$("#totalPeople").html(data.number);
		}
	});
}

//Execute the function to make the AJAX call 
//Remember, we've only defined the function above, we haven't actually called it 
getSpaceData();

