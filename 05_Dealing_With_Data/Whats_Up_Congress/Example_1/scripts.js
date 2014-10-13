var WUC = {};

function getCongressData(){
	console.log("Yup!");

	//Get todays date
	var today = new Date();
	//Convert it into the YYYY-MM-DD format
	var dd = today.getDate();
	if (dd < 10){
		dd = 0 + dd.toString();
	}
	var mm = today.getMonth()+1;  //getMonth is zero based
	if (mm < 10){
		mm = 0 + mm.toString();
	}
	var yyyy = today.getFullYear();
	//Construct string	
	var queryDay = yyyy + '-' + mm + '-' + dd;
	console.log(queryDay);
	
	var myKey =	'YOUR-KEY-GOES-HERE';
	var myURL = 'http://congress.api.sunlightfoundation.com/floor_updates?legislative_day=' + queryDay + '&apikey=' + myKey;

	//Make AJAX request
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//console.log(data);
			WUC.today = data.results;
			console.log(WUC.today);
		}
	});
}

$(document).ready(function(){
	//Make request to Sunlight Congress API
	getCongressData();
});
