var nyTimesArticles;
var instagramData;

function makeHTML(){
	var theHTML = '';
	for (var i = 0; i < nyTimesArticles.length; i++){
		theHTML += "<div class='instaArticle'>";
		theHTML += "<h3>" + nyTimesArticles[i].headline.main + "</h3>";
		theHTML += "<img src='" + instagramData[i].images.low_resolution.url + "'/>";
		theHTML += "</div>";
	}
	$('main').html(theHTML);
}

function getInstaData(){
	//console.log("Get Instagram Data");
	var instaURL = "https://api.instagram.com/v1/tags/news/media/recent?client_id=";
	var myInstaKey = "9474e8cecf094d94b0cf366097977931";
	var instaReqURL = instaURL + myInstaKey;

	$.ajax({
		url: instaReqURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			//console.log("WooHoo!");
			//console.log(data);
			instagramData = data.data;
			console.log(instagramData);
			makeHTML();
		}
	});
}

function getNYTimesData(){
	console.log("Get NY Times Data");

	var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=0&sort=newest&api-key=';
	var myNYKey = '76b60b9d626e071aae40240aade2f237:13:64998407';
	var nyTimesReqURL = nyTimesURL + myNYKey;

	$.ajax({
		url: nyTimesReqURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log("Uh oh...");
			console.log(err);
		},
		success: function(data){
			//console.log(data);
			nyTimesArticles = data.response.docs;
			console.log(nyTimesArticles);
			getInstaData();
		}
	});
}

$(document).ready(function(){
	//console.log("I'm ready!");
	getNYTimesData();
});