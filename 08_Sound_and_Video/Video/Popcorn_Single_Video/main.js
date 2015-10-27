/*
You will need a YouTube Data API KEY to run this example
https://developers.google.com/youtube/v3/getting-started
*/
var myKey = 'YOUR-KEY-GOES-HERE';

function makeYoutubeRequest(term){
	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&q=' + term + '&type=video&order=viewCount&key=';

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
			//return;

			//Get the video id
			var theVideoId = data.items[0].id.videoId;
			console.log(theVideoId);
			//Create the youtube video link
			var theVideoLink = 'http://www.youtube.com/watch?v=' + theVideoId + '&controls=1';
	
			//Initialize a Popcorn object with the video link
			//(1) Set a 'Media Wrapper' for the Popcorn object
			var wrapper = Popcorn.HTMLYouTubeVideoElement('#videos');
			//(2) Set the url for the video
			wrapper.src = theVideoLink;
			//(3) Initialize the Popcorn object with the wrapper
			var popcornVideo = Popcorn(wrapper);
			
			/*
			//ALT APPROACH - use the smart() method
			var popcornVideo = Popcorn.smart( "#videos", theVideoLink );
			*/

			//Call a function to register event listeners on the video
			setVideoEvents(popcornVideo);


			/*
			//ALT APPROACH - Check Duration
			var minLength = 60;
			//Wait for the entire video to be ready
			popcornVideo.on('canplayall', function(){
				console.log('Duration: ' + video.duration());
				if (video.duration() > minLength){
					setVideoEvents(popcornVideo);
				}
				else{
					alert("The video is not long enough...");
				}
			});
			*/
		}
	});
}

var bgAnimation;

function setVideoEvents(video){
	video.autoplay(true);

	//Media Methods
	video.on('timeupdate', function(){
		//console.log(video.currentTime());
		$('#animation').append("<div class='greenBox'></div>");
		console.log("Updating!");
	});

	video.on('play', function(){
		console.log('Playing at: ' + video.currentTime());
	});

	video.on('pause',function(){
		console.log("Paused at: " + video.currentTime());
		$('#animation').append("<div class='redBox'></div>");
	});

	//Use the 'cue' to trigger an event at a specific time
	video.cue(5, function() {
		//Do somethinge at time :5
		console.log("We reached second 5");
		//changeBG();
	});

	video.cue(12, function() {
		//clearInterval(bgAnimation);
	});

	video.code({
		start: 5,
		end: 12,
		onStart: function( options ) {
			console.log(options);
			$('#infoBox').css({'color':'white', 'background-color': 'purple'});
			$('#infoBox').html("Want to know more?");
		},
		onEnd: function( options ) {
			//clearInterval(bgAnimation);
			$('#infoBox').html("Read about NYUAD below!");
		}
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
	makeYoutubeRequest("nyu abu dhabi");
});