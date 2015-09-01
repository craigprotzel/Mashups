function searchWikipedia(word){
	console.log(word);

	var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + word;

	$.ajax({
		url: wikiURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("Oh no!!!! Didn't work...");
		},
		success: function(data){
			console.log("WooHoo!!!");

			console.log("The data object");
			console.log(data);

			console.log("The Term");
			console.log(data[0]);
		
			console.log("The Results");
			console.log(data[1]);

			var theSearchedTerm = data[0].toUpperCase();
			var theSearchResults = data[1];

			$('#theResults').append('<h3>' + theSearchedTerm + '</h3>');
			var theResultsString = '<ol>';
			for (var i = 0; i < theSearchResults.length; i++){
				theResultsString += '<li>' + theSearchResults[i] + '</li>';
			}
			theResultsString += '</ol>';
			$('#theResults').append(theResultsString);
		}
	});
}

$(document).ready(function(){
	console.log("We are ready!");

 //button listener
 $('#theButton').click(function(){

		console.log("CLicked the button!");
		var searchTerm = $('#theInput').val();

		//function to make api request
		searchWikipedia(searchTerm);

	});
});

console.log("Not ready!");