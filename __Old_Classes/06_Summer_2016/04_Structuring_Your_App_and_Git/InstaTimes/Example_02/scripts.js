var nyTimesData = [];

function createHTML(nyObj, igObj){
	console.log('Calling create HTML');

	var htmlString = '';
	htmlString +='<div class="box">';
	htmlString +='<h3>' + nyObj.headline.main + '</h3>';
	htmlString +='<img src=' + igObj.images.low_resolution.url + ' />';
	htmlString +='<p>' +  nyObj.snippet + '</p>';
	htmlString +='</div>';
	$('#container').append(htmlString);
}

function getInstagramData(theObj){
	console.log("Getting Instagram Data");

	var searchTerm = theObj.new_desk || theObj.subsection || theObj.type_of_material || 'news';
	console.log(searchTerm);

	var myInstaKey = 'YOUR-API-KEY-GOES-HERE';
	var instagramURL = 'https://api.instagram.com/v1/tags/' + searchTerm + '/media/recent?client_id=' + myInstaKey;

	//Make AJAX Request
	$.ajax({
		url: instagramURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(error){
			console.log(error);
		},
		success: function(data){
			console.log('WooHoo');
			//console.log(data);

			var theFirstInstaObj = data.data[0];
			//Generate HTML
			createHTML(theObj,theFirstInstaObj);
		}
	});
}

function getNYTimesData(){
	console.log("Getting NY Times");

	var myNYTimesKey = 'YOUR-API-KEY-GOES-HERE';
	var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=0&sort=newest&api-key=' + myNYTimesKey;

	//Make AJAX request
	$.ajax({
		url: nyTimesURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
		},
		success: function(data){
			console.log("Success");
			//console.log(data);
			nyTimesData = data.response.docs;
			console.log(nyTimesData);

			for (var i = 0; i < nyTimesData.length; i++){
				//get data for each item in the NY Times data array
				getInstagramData(nyTimesData[i]);
			}
		}
	});
}

$(document).ready(function(){
	console.log("We are ready!");
	$('#container').html('');
	//Make a request to the NY Times API
	getNYTimesData();
});