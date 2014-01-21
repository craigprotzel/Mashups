/*	
NYU - ITP - MASHUPS CLASS
SPRING 2014
gihtub.com/craigprotzel/Mashups

PEOPLE IN SPACE - EXAMPLE #2
Open-Notify.org - http://open-notify.org/Open-Notify-API/People-In-Space/
*/

//Define a global object to store the data
var spaceData = {};

//Define the url for the API call
var url = "http://api.open-notify.org/astros.json";

//Define the funnction to execute the AJAX call
function getSpaceData() {
	"use strict";

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$("#totalPeople").html(data.number);
			spaceData.number = data.number;
		}
	});
}

//Execute the wikipedia API call function with the correct argument
getSpaceData();

