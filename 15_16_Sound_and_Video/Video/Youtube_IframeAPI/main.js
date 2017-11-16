/*
You will need a YouTube Data API KEY to run this example
https://developers.google.com/youtube/v3/getting-started
*/

var player;
var vidTimeCheck;
var myKey = 'YOUR-KEY-GOES-HERE';

//Make a request to the Youtube Data API to get a video ID
function makeYoutubeRequest(term){

	if (myKey == 'YOUR-KEY-GOES-HERE'){
		alert('Please add your youtube data api key as the "myKey" variable');
		return;
	}

	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&type=video&q=' + term + '&key=';
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
	
			//Get a random integer between 0 and 5
			var num = Math.floor(Math.random() * 5);
			//Get the video id
			var theVideoId = data.items[num].id.videoId;
			console.log(theVideoId);
 
			/*
			//Note - you could use the id to create an iframe tag and put the video on the page
			var embedLink = "https://www.youtube.com/embed/" + theVideoId;
			var iframeTag = '<iframe width="560" height="315" src="' + embedLink + '" frameborder="0" allowfullscreen></iframe>'
			$('#youtubeVideo').append(iframeTag);
			return;
			*/

			//Initialize a youtube player object
			//The first argument is the id of the div where the video should go
			player = new YT.Player('youtubeVideo', {
				height: '390',
				width: '640',
				videoId: theVideoId,
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
			
			function onPlayerReady(event) {
				event.target.playVideo();
			}

			function onPlayerStateChange(event) {

				var elapsedTime;

				if (event.data == YT.PlayerState.PLAYING) {
					console.log("You clicked PLAY!");
					console.log("Resetting interval");
					
					//Create a interval to check for the "current video time"
					//This will be called every 500 millis or 0.5 seconds
					//By saving it to the global var vidTimeCheck, we can clear it 
					//when the video is stopped and/or paused 
					//and then restart it when the video is played
					vidTimeCheck = setInterval(function(){
						elapsedTime = player.getCurrentTime();
						console.log("Currently At: " + elapsedTime);
						$('#currentTime').html(elapsedTime);
					},500);
				}
				else {
					console.log("Clearing Interval");
					//This will stop the checking of the video's current time
					clearInterval(vidTimeCheck);
					elapsedTime = player.getCurrentTime();
					console.log("Stopping At: " + elapsedTime);
					$('#currentTime').html("Video not playing");
				}
			}
		}
	});
}

$(document).ready(function(){
	//Calling function to get a youtube video
	makeYoutubeRequest("NYU Abu Dhabi");
});