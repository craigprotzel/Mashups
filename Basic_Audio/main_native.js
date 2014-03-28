// Native JS - Web Audio API
var context, source, buffer;

var AudioContext = (	window.AudioContext ||
						window.webkitAudioContext ||
						window.mozAudioContext ||
						window.oAudioContext ||
						window.msAudioContext);

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

var freeData;
function getFreeSound(term){

	var url = 'http://www.freesound.org/api/sounds/search/?q=';
	var myKey = '&api_key=dfb706550f95738140ea58b0baaa1745876de52d';
	var myURL = url + term + myKey;

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
			freeData = data;
			var audioLink = freeData.sounds[0]['preview-hq-mp3'];
			console.log(audioLink);

			makeAudioRequest(audioLink);
		}
	});
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
