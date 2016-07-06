var nyTimesArticles;
// var instagramData;

function makeHTML(nyObj, instaObj){
	// for (var i = 0; i < 3; i++){
		var theHTML = '';
		theHTML += "<div class='instaArticle'>";
		theHTML += "<h3>" + nyObj.headline.main + "</h3>";
		theHTML += "<img src='" + instaObj.images.low_resolution.url + "'/>";
		theHTML += "</div>";
		$('main').append(theHTML);
	// }
}

var num = 1;

function getInstaData(nyObj){
	console.log("Get Instagram Data");

	var queryTerm = nyObj.subsection_name || nyObj.news_desk || nyObj.section_name || nyObj.type_of_material || 'news';

	var instaURL = "https://api.instagram.com/v1/tags/" + queryTerm + "/media/recent?client_id=";
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
			console.log("Back from Instagram!");
			//console.log(data);
			var instagramData = data.data;
			var randomVal = Math.floor(Math.random() * 20);
			var randomInstaObj = instagramData[0];
			//console.log(instagramData);
			console.log("About to call makeHTML function - " + num);
			num++;
			makeHTML(nyObj, randomInstaObj);
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
			console.log("Back from the NY Times!");
			//console.log(data);
			nyTimesArticles = data.response.docs;
			console.log(nyTimesArticles);

			for (var i = 0; i < nyTimesArticles.length; i++){
				getInstaData(nyTimesArticles[i]);
			}

		}
	});
}

$(document).ready(function(){
	//console.log("I'm ready!");
	getNYTimesData();
	//getInstaData();
	// console.log("Here!");
});



