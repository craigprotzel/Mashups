//Arrays to store the data
var nyTimesData = [];
var instagramData = [];

//Instagram API Request
function getInstagramData(){
	var myInstaKey = 'YOUR-API-KEY-GOES-HERE';
	var instagramURL = 'https://api.instagram.com/v1/media/popular?client_id=' + myInstaKey;

	$.ajax({
		url: instagramURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("Oh no");
		},
		success: function(data){
			console.log("WooHoo Instagram");
			//console.log(data);

			instagramData = data.data;
			console.log(instagramData);

			var htmlString = '';
			for (var i = 0; i < 10; i++){
				htmlString += '<div class="container">';
				htmlString += '<h3>' + nyTimesData[i].headline.main + '</h3>';
				htmlString += '<img src=' + instagramData[i].images.low_resolution.url + ' />';
				htmlString += '<p>' + nyTimesData[i].snippet + '</p>';
				htmlString += '</div>';
			}
			$('#loading').hide();
			$('#thePaper').append(htmlString);
		}
	});
}

//NY Times API Request
function getNYTimesData(){
	var myNYTimesKey = 'YOUR-API-KEY-GOES-HERE';
	var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&sort=newest&api-key=' + myNYTimesKey;

	$.ajax({
		url: nyTimesURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("Oh no...");
		},
		success: function(data){
			console.log("WooHoo NY Times");
			//console.log(data);

			nyTimesData = data.response.docs;
			console.log(nyTimesData);

			//Make request to Instagram API
			getInstagramData();
		}
	});
}

$(document).ready(function(){
	console.log("We are ready!");
	//Make request to NY Times API (on page load)
	getNYTimesData();
});