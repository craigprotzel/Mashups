//Function to genrerate HTML string
function makeHTML(theData){
	var theHTML = '<ul>';
	theData.forEach(function(d){
		theHTML += '<li>' + d + '</li>';
	});
	theHTML += '</ul>';
	return theHTML;
}

//Function to get data via the server's JSON route
function getAPIData(term){
	$.ajax({
		url: '/api/' + term,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log(data);
			alert("Oh No! Try a refresh?");
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			var theHTML = makeHTML(data[1]);
			$('body').append(theHTML);
		}
	});
}

$(document).ready(function(){
	console.log(search);
	console.log(message);

	if (search){
		console.log("Make Request!");
		getAPIData(message);
	}
});