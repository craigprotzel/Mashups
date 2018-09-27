var nyTimesArticles;

function makeHTML(articleObj, imgURL){
	console.log("Making HTML");
	
	// for (var i = 0; i < articles.length; i++){
	// 	var htmlString = "<h2>" + articles[i].headline.main + "</h2>";
	// 	$('#results').append(htmlString);
	// }

	var htmlString = "<h2>" + articleObj.headline.main + "</h2>";
	htmlString += "<img src=" + imgURL + ">";
	$('#results').append(htmlString);
}

function getFlickrData(nytObj){
	console.log("About to make Flickr Request");
	//console.log(nytObj.headline.main);

	//Make Flickr AJAX request
	var flickrKey = "75e24e2a0c9c6bfb33ea2993943e6c28";
	var flickrURL = "https://api.flickr.com/services/rest/";
	flickrURL += "?method=flickr.photos.search&api_key="+ flickrKey;
	flickrURL += "&nojsoncallback=1&extras=url_o&format=json&tags=";
	
	var nyTimesKeyWord;
	if (nytObj.keywords.length > 0){
		nyTimesKeyWord = nytObj.keywords[0].value;	
	}
	else{
		nyTimesKeyWord = "news";
	}
	console.log(nyTimesKeyWord);

	var flickrRequestURL = flickrURL + nyTimesKeyWord;

	$.ajax({
		url: flickrRequestURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo 2 " + nytObj.headline.main);
			console.log(data);

			var flickrImgURL;
			if (data.photos.photo.length > 0){
				var num = Math.floor(Math.random()* data.photos.photo.length);
				flickrImgURL = data.photos.photo[num].url_o;
			}
			else{
				flickrImgURL = "http://gdpulse.com/wp-content/uploads/2016/04/news-2.jpg";
			}
			makeHTML(nytObj,flickrImgURL);
		}
	});
}

function getNYTimesData(){

	var nyTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
	nyTimesURL += "?q=new+york+times&page=0&sort=newest&api-key=";

	var nyTimesKey = "e639d399e78c44ec892123bcbb1f6eb2";
	var nyTimesRequestURL = nyTimesURL + nyTimesKey;

	console.log("About to make NY Times request...");
	$.ajax({
		url: nyTimesRequestURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("WooHoo!");
			//console.log(data);

			//Work with NYTimes data
			nyTimesArticles = data.response.docs;
			console.log(nyTimesArticles);

			for (var i = 0; i < nyTimesArticles.length; i++){
				getFlickrData(nyTimesArticles[i]);
			}
			//makeHTML(nyTimesArticles);
		}
	});
	console.log("Waiting...");
}


$(document).ready(function(){
	console.log("The document is ready!");
	getNYTimesData();
});