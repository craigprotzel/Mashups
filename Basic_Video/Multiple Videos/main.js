var allPopcorns = [];
var allPopcornObjects = [];

function makeYoutubeRequest(terms){

	var url = 'https://www.googleapis.com/youtube/v3/search?';
	var myParams = 'part=snippet&type=video&q=';
	var myKey = '&key=YOUR-KEY-GOES-HERE';

	var myURL = url + myParams + terms + myKey;

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
				var curVideoLink = 'http://www.youtube.com/watch?v=' + curVideoId;
				allPopcorns.push({"id" : curVideoId , "link" : curVideoLink});
				//Create a div
				$('#videos').append('<div class="video" id=' + allPopcorns[i].id + '></div>');
				var tempPopcorn = Popcorn.youtube(curVideoId, curVideoLink);
				allPopcornObjects.push(tempPopcorn);
			}

			// When the video is ready...
			allPopcornObjects[0].on("canplayall", function() {
				this.volume(1);
				this.currentTime(10);
			});

			allPopcornObjects[0].cue(10, function(){
				console.log("Playing 0");
				this.play();

				this.cue(15, function(){
					this.pause();
					allPopcornObjects[1].volume(1);
					allPopcornObjects[1].play(0);
				});
			});

			allPopcornObjects[1].cue(6, function(){
				allPopcornObjects[1].pause();
				allPopcornObjects[2].volume(1);
				allPopcornObjects[2].currentTime(60);
			});

			allPopcornObjects[2].cue(60, function(){
				this.play();
			});
		}
	});
}

makeYoutubeRequest('sxsw 2014 ASAP Rocky');


