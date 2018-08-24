var nyTimesArticles = [];

//Function to make HTML
function makeHTML(newsObj, photoObj){

	$('#loading').empty();

	// for (var i = 0; i < nyTimesArticles.length; i++){
		var thePhoto =  photoObj.url_o || "news.jpg";

		var htmlString = "<div class='article-box'>";
		htmlString += "<h2 class='headline'>" + newsObj.headline.main + "</h2>";
		htmlString += "<img src=' " + thePhoto + "' />";
		htmlString += "</div>";

		$('#main-container').append(htmlString);
	// }
}

//Function request data from Flickr
function getFlickrData(nytObj){

	var keyWord = "news";
	if (nytObj.keywords.length > 0){
		keyWord = nytObj.keywords[0].value || "news";		
	}

	var flickrURL = "https://api.flickr.com/services/rest/?";
	flickrURL += "method=flickr.photos.search&api_key=86a50f9515065def7725667df1f10fba&"
	flickrURL += "text=" + keyWord + "&format=json&nojsoncallback=1&extras=url_o";

	$.ajax({
		url: flickrURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log(data);
			var flickrPhotos = data.photos.photo;
			console.log(flickrPhotos);

			makeHTML(nytObj, flickrPhotos[0]);
		}
	});
}

//Function to request data from NY Times
function getNYTimesData(){

	var nyTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
	nyTimesURL += "q=new+york+times&page=0&sort=newest&api-key=";
	nyTimesURL += "e639d399e78c44ec892123bcbb1f6eb2";

	$.ajax({
		url: nyTimesURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log('Uh oh');
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			nyTimesArticles = data.response.docs;
			console.log(nyTimesArticles);

			for (var i = 0; i < nyTimesArticles.length; i++){
				getFlickrData(nyTimesArticles[i]);				
			}
		}
	});
}

$(document).ready(function(){

	console.log("The document is ready!");
	getNYTimesData();
});