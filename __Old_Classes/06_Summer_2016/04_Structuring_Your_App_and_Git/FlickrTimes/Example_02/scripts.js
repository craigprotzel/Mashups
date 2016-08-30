console.log("Loading...");


function makeHTML(theObj,theImageURL){

		var htmlString = '<div class="flickr-article-box">';
		htmlString +=	'<h1>' + theObj.headline.main + '</h1>';
		htmlString +=	'<img src="' + theImageURL + '">';
		htmlString += '</div>';

		$('#news-container').append(htmlString);
}

function getFlickrData(theNYTObj){
	console.log("Get Flickr Data");

	var theTerm = theNYTObj.section_name || 'news';

	var flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
	var flickrKey = 'YOU-FLICKR-KEY-GOES-HERE';
	var flickrQueryParams = '&text=' + theTerm + '&format=json&nojsoncallback=1&extras=url_o';
	var flickrReqURL = flickrURL + flickrKey + flickrQueryParams;

	$.ajax({
		url: flickrReqURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("Got the data");
			console.log(theNYTObj.headline.main);
			console.log(theNYTObj.section_name);
			console.log(data);

			var theImage = 'news.jpg';
			var randomImgNum = Math.floor(Math.random() * 100);
			console.log(randomImgNum);
			if (data.photos.photo[randomImgNum]){
				if (data.photos.photo[randomImgNum].url_o){
					theImage = data.photos.photo[randomImgNum].url_o;
				}
			}
			console.log(theImage);

			makeHTML(theNYTObj, theImage);

		}
	});
}

function getNYTimesData(){
	console.log("Getting NY Times Data");

	var nyTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=0&sort=newest&api-key=";
	var myNYTimesAPIKey = "YOUR-NY-TIMES-KEY-GOES-HERE";
	var nyTimesReqURL = nyTimesURL + myNYTimesAPIKey;

	$.ajax({
		url: nyTimesReqURL,
		type: 'GET',
		dataType: 'json',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("Got the data");
			console.log(data);
			var theArticles = data.response.docs;
			console.log(theArticles);

			//Clear out the container
			$('#new-container').html("");

			for (var i = 0; i < theArticles.length; i++){
				getFlickrData(theArticles[i]);
			}
		}
	});

}

$(document).ready(function(){
	console.log("The document is ready.");
	getNYTimesData();
});

console.log("Finished loading.");



