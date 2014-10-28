/*
You will need a YouTube Data API KEY to run this example
https://developers.google.com/youtube/v3/getting-started
*/

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

			//Initialize a Popcorn object with the video link
			//(1) Set a 'Media Wrapper' for the Popcorn object
			var wrapper = Popcorn.HTMLYouTubeVideoElement('#videos');
			//(2) Set the url for the video
			wrapper.src = theVideoLink;
			//(3) Initialize the Popcorn object with the wrapper
			var popcornVideo = Popcorn(wrapper);
			
			/*
			ALT METHOD - use the smart() method
			var popcornVideo = Popcorn.smart( "#videos", theVideoLink );
			*/

			//Register events on the video
			setVideoEvents(popcornVideo);
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
		console.log('Playing at: ' + video.currentTime());
		//changeBG();
	});
	video.on('pause',function(){
		console.log("Paused at: " + video.currentTime());
		$('#animation').append("<div class='redBox'></div>");
		//clearInterval(bgAnimation);
	});

	//Use the 'cue' to trigger an event at a specific time
	video.cue(18, function() {
		//Do somethinge at time :18
		console.log("We reached second 18!");
	});

	//Plugins
	video.footnote({
		start: 1,
		end: 5,
		text: 'The video is playing!!',
		target: "infoBox"
	});

	video.code({
		start: 5,
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

	video.wikipedia({
		start: 12,
		end: 18,
		src: "http://en.wikipedia.org/wiki/New_York_University_Abu_Dhabi",
		title: "NYU AD",
		target: "wiki"
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



