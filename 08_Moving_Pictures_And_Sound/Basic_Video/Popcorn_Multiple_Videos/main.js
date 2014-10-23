var allPopcornObjects = [];

function makeYoutubeRequest(terms){

	$('#videos').html('');
	allPopcornObjects = [];

	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&type=video&q=' + terms + '&key=';
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

			for (var i = 0; i < 3; i++){
				var curVideoId = data.items[i].id.videoId;
				var popVideoId = "pop" + curVideoId;
				var curVideoLink = 'http://www.youtube.com/watch?v=' + curVideoId;
				//Create a div
				$('#videos').append('<div class="video" id=' + popVideoId + '></div>');
				console.log(curVideoId);
				var tempWrapper = Popcorn.HTMLYouTubeVideoElement('#' + popVideoId);
				tempWrapper.src = curVideoLink;
				var tempPopcorn = Popcorn(tempWrapper);
				allPopcornObjects.push(tempPopcorn);
			}

			// When the video is ready...
			allPopcornObjects[0].on("canplayall", function() {
				this.currentTime(10);
			});
			allPopcornObjects[0].cue(10, function(){
				console.log("Playing 0");
				this.play();
				this.cue(15, function(){
					this.pause();
					allPopcornObjects[1].play(20);
				});
			});
			allPopcornObjects[1].cue(24, function(){
				this.pause();
				allPopcornObjects[2].currentTime(6);
			});
			allPopcornObjects[2].cue(6, function(){
				this.play();
				this.cue(30, function(){
					this.pause();
				});
			});
		}
	});
}

makeYoutubeRequest('nyu abu dhabi');