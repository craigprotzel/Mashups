/*
Code on this example is meant to demonstrate a variety of 'jQuery AJAX' patterns you might want to use in class

Here is a list of helpful resources/tutorials that explain these patterns
 * http://api.jquery.com/category/deferred-object/
 * http://www.htmlgoodies.com/beyond/javascript/making-promises-with-jquery-deferred.html
 * http://www.bitstorm.org/weblog/2012-1/Deferred_and_promise_in_jQuery.html
 * http://css-tricks.com/multiple-simultaneous-ajax-requests-one-callback-jquery/
*/

/*******************************************/
//Define the Wiki API url
var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

/*******************************************/
//Define some initial callback functions

//An "error" or "fail" function
function itFailed(data){
	console.log("Failed");
	console.log(data);
}

//A "success" or "done" function
function itWorked(data){
	console.log("Worked!");
	console.log(data);
}

//A "completed" or "always" function
function finished(){
	console.log("I'm all finished");
}

/*******************************************/
//The "Basic" Pattern

function searchBasicPattern(searchTerm){
	$.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp',
		error: itFailed,
		success: itWorked
	});
}

/*******************************************/
//The "Done" Pattern
//set the AJAX call equal to a variable
//attach 'listeners' to this variable
function searchDonePattern(searchTerm){

	var theAJAXCall = $.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp'
	});

	theAJAXCall.done(itWorked);
	theAJAXCall.fail(itFailed);
	theAJAXCall.always(finished);

	//Add a comment for the console
	return 'Running "Done-Fail" Pattern';
}

/*******************************************/
//The "Then" Pattern
//'.then' expects two arguments:
//argument 1 - a 'success/done' function
//argument 2 -  an 'error/fail' function
function searchThenPattern(searchTerm){
	var theAJAXCall = $.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp'
	});

	theAJAXCall.then(itWorked,itFailed);

	//Add a comment for the console
	return 'Running "Then" Pattern';
}

/*******************************************/
//The "When-Then" Pattern
//'.when' expects our AJAX call vars as arguments
//'.then' will only be called when BOTH of these arguments are 'ready'
function searchWhenThenPattern(searchTerm){

	var searchOne = $.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp'
	});

	var searchTwo = $.ajax({
		url: wikiURL + 'mashups',
		type: 'GET',
		dataType: 'jsonp'
	});

	//Pass in the AJAX objects
	$.when(searchOne, searchTwo).then(function(sOne, sTwo){
			console.log("All good");
			console.log(sOne);
			console.log(sTwo);
		},
		//Define the error conditions
		function(err){
			console.log("Problems");
			console.log(err);
		});

	return 'Running "When-Then" Pattern';
}

/*******************************************/
//The "When-Done" Pattern
//'.when' expects our AJAX call vars as arguments
//'.done' will only be called when BOTH of these arguments return successfully
function searchWhenDonePattern(searchTerm){

	var searchOne = $.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp'
	});

	var searchTwo = $.ajax({
		url: wikiURL + 'mashups',
		type: 'GET',
		dataType: 'jsonp'
	});


	$.when(searchOne, searchTwo).done(function(sOne, sTwo){
		console.log(sOne);
		console.log(sTwo);
	}).fail(function(err){
		console.log("Problems");
		console.log(err);
	});

	return 'Running "When-Done" Pattern';
}

/*******************************************/
//Return an AJAX object from a function
function makeASearchObj(searchTerm){
	console.log("Returning a promise");

	var searchObj = $.ajax({
		url: wikiURL + searchTerm,
		type: 'GET',
		dataType: 'jsonp'
	});

	return searchObj;
}

/*******************************************/
$(document).ready(function(){
	console.log("We are loaded!");
	$('#theButton').click(function(){

		var searchTerm = $("#query").val().toUpperCase();

		alert('To search for ' + searchTerm + ' remove this alert from the scripts.js file and uncomment one of the "search" functions below it. Responses will write to the console. You can also run any of the functions in the console at any time.');

		//searchBasicPattern(searchTerm);

		//searchDonePattern(searchTerm);

		//searchThenPattern(searchTerm);

		//searchWhenThenPattern(searchTerm);

		//searchWhenDonePattern(searchTerm);


		//ALT APPROACH - return promise directly from function

		//var searchCall = makeASearchObj(searchTerm);
		//searchCall.done(itWorked);
		//searchCall.fail(itFailed);

		//var searchCall = makeASearchObj(searchTerm);
		//searchCall.then(itWorked, itFailed);

	});

	//Allow for enter to be pressed when the inupt box is active
	$("#query").keypress(function(e){
		//Check If enter key is pressed
		if (e.which == 13){
			//Use jQuery's trigger() function to execute the click event
			$("#theButton").trigger('click');
		}
	});

});
