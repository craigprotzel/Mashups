
function makeYoutubeRequest(term){
	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&q=' + term + '&type=video&order=viewCount&key=';
	var myKey = 'YOUR-KEY-GOES-HERE';	
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

			//Get the video id
			var theVideoId = data.items[0].id.videoId;
			console.log(theVideoId);
			//Create the youtube video link
			var theVideoLink = 'http://www.youtube.com/watch?v=' + theVideoId;
			//Init the Popcorn object
			var wrapper = Popcorn.HTMLYouTubeVideoElement('#videos');
			wrapper.src = theVideoLink;
			var popcornVideo = Popcorn(wrapper);

			//Register events on the video
			setVideoEvents(popcornVideo);

			//*************************************************************//
			// If you wanted to add multiple videos...
			// var allPopcorns = [];
			// for (var i = 0; i < 5; i++){
			// 	var curVideoId = data.items[i].id.videoId;
			// 	var curVideoLink = 'http://www.youtube.com/watch?v=' + curVideoId;
			// 	//Create a div
			// 	$('#videos').append('<div class="video" id=' + curVideoId + '></div>');
			// 	var tempWrapper = Popcorn.HTMLYouTubeVideoElement('#' + curVideoId);
			// 	tempWrapper.src = curVideoLink;
			// 	var tempPopcorn = Popcorn(tempWrapper);
			// 	allPopcorns.push(tempPopcorn);
			// }
			//*************************************************************//
		}
	});
}

var bgAnimation;

function setVideoEvents(video){
	video.autoplay(true);

	//Media Methods
	video.on('timeupdate', function(){
		$('#animation').append("<div class='greenBox'></div>");
	});
	video.on('play', function(){
		changeBG();
	});
	video.on('pause',function(){
		console.log("Paused!");
		$('#animation').append("<div class='redBox'></div>");
		clearInterval(bgAnimation);
	});

	//Plugins
	video.footnote({
		start: 1,
		end: 5,
		text: 'This text will appear in "infoBox"!!!',
		target: "infoBox"
	});

	video.code({
		start: 8,
		end: 12,
		onStart: function( options ) {
			console.log(options);
			$('#infoBox').css({'color':'white', 'background-color': 'blue'});
			$('#infoBox').html("More text!!!");
		},
		onEnd: function( options ) {
			$('#infoBox').html();
		}
	});

	video.cue( 15, function() {
		clearInterval(bgAnimation);
	});

}

function changeBG(){
	bgAnimation = setInterval(function(){
		var newBGColor = generateRandomColor();
		$('body').css("background-color", newBGColor);
	}, 2000);
}

function generateRandomColor(){
	var r = Math.floor(Math.random() * 200);
	var g = Math.floor(Math.random() * 225);
	var b = Math.floor(Math.random() * 255);

	var randomColor = "rgb(" + r + "," + g + "," + b + ")";
	return randomColor;
}

$(document).ready(function(){
	makeYoutubeRequest("world cup soccer");
});



