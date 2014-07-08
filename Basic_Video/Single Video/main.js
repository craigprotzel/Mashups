var theVideo;
var bgAnimation;

function makeYoutubeRequest(){

	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&q=soccer&type=video&order=viewCount';
	var myKey = '&key=YOUR-KEY-GOES-HERE';

	var myURL = url + myParams + myKey;

	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);

			var curVideoId = data.items[0].id.videoId;
			console.log(curVideoId);
			var curVideoLink = 'http://www.youtube.com/watch?v=' + curVideoId;
			theVideo = Popcorn.youtube('videos', curVideoLink);

			//*************************************************************//
			// If you wanted to add multiple videos...
			// var allPopcorns = [];
			// for (var i = 0; i < 5; i++){
			// 	var curVideoId = data.items[i].id.videoId;
			// 	var curVideoLink = 'http://www.youtube.com/watch?v=' + curVideoId;
			// 	//Create a div
			// 	$('#videos').append('<div class="video" id=' + curVideoId + '></div>');
			// 	var tempPopcorn = Popcorn.youtube(curVideoId, curVideoLink);
			// 	allPopcorns.push(tempPopcorn);
			// }
			//*************************************************************//

			console.log("HERE!");
			theVideo.on('timeupdate', function(){
				if (this.paused()){
					console.log("TIME UPDATE - PAUSED");
					$('#animation').append("<div class='redBox'></div>");
					//clearInterval(bgAnimation);
				}
				else{
					$('#animation').append("<div class='greenBox'></div>");
				}
			});

			theVideo.on('play', function(){
				changeBG();
			});
			theVideo.on('pause',function(){
				clearInterval(bgAnimation);
			});
		}
	});
}

makeYoutubeRequest();

$(document).ready(function(){
	theVideo.on('pause',function(){
		clearInterval(bgAnimation);
	});
	theVideo.on('play', function(){
		changeBG();
	});
});

function changeBG(){
	bgAnimation = setInterval(function(){
		var newBGColor = generateRandomColor();
		$('body').css("background-color", newBGColor);
	}, 1000);
}

function generateRandomColor(){
	var r = Math.floor(Math.random() * 125);
	var g = Math.floor(Math.random() * 155);
	var b = Math.floor(Math.random() * 255);

	var randomColor = "rgb(" + r + "," + g + "," + b + ")";
	return randomColor;
}