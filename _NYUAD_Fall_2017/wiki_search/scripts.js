console.log("Ready 1");

function searchWiki(term){

	var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
	var searchURL = wikiURL + term;
	console.log(searchURL);

	$.ajax({
		url: searchURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(err){
			console.log("We got problems");
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo");
			console.log(data);

			//Clear the result element
			$('#results').html("");

			var theResults = data[1];
			console.log(theResults);
			for (var i = 0; i < theResults.length; i++){
				var htmlString = "<div>" + theResults[i] + "</div>";
				$("#results").append(htmlString);
			}
		} 
	});
}

$(document).ready(function(){

	console.log("Ready 2");

	//Setup button event handler
	$("#theButton").click(function(){
		console.log("The button was pressed!");

		//Grab the input box value
		var theInput = $('#theInput').val();
		console.log(theInput);
		searchWiki(theInput);
	});

});

console.log("Ready 3");
console.log("Ready 4");