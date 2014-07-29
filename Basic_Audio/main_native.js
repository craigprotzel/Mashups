function getFreeSound(term){
	//This is for the Freesound v1 api, which is now deprecated for v2...
	var url = 'http://www.freesound.org/api/sounds/search/?q=' + term + '&api_key=';
	var myKey = 'YOUR-KEY-GOES-HERE';
	var myURL = url + myKey;

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
			var audioLink = data.sounds[0]['preview-hq-mp3'];
			console.log(audioLink);
			makeAudioRequest(audioLink);
		}
	});
}

// Native JS - Web Audio API
var context, source, buffer;
var AudioContext = window.AudioContext || window.webkitAudioContext;
//Confirm Web Audio API is available
if (AudioContext) {
	context = new AudioContext();
}
else {
	alert("Web Audio API is not available. Please use a supported browser.");
}

function onError(){
	console.log("We got problems");
}

//Define function for JS AJAX Request
function makeAudioRequest(url){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';

	//Set success functionality
	request.onload = function() {
		context.decodeAudioData(request.response, function(dataBuffer) {
			console.log(request.response);
			console.log(dataBuffer);
			buffer = dataBuffer;
			$("button#play").css('background-color', 'green');
		}, onError);
	};
	request.send();
}

//Create the audio source and play it
function playSound(buffer) {
	source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.start(0);
	console.log(source);
}

//Stop playing the audio source
function stopSound(){
	source.stop();
}

$(document).keydown(function(e) {
	//console.log(e);
	//console.log(e.keyCode);
	var curKey = e.keyCode;

	switch(curKey){
		//Up
		case 38:
			//Native WebAudio
			source.playbackRate.value += 0.1;
			console.log(source.playbackRate.value);

			break;
		//Down
		case 40:
			//Native WebAudio
			source.playbackRate.value -= 0.1;
			console.log(source.playbackRate.value);

			break;
	}
});

$(document).ready(function(){
	$('#play').click(function(){
		playSound(buffer);
	});
	$('#pause').click(function(){
		stopSound();
	});
});

//Execeute the request
getFreeSound('lazer');