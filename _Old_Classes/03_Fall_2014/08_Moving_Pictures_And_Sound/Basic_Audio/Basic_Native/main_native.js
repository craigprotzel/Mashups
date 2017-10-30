/*
You will need a FreeSound.org API KEY to run this example
http://www.freesound.org/help/developers/
*/
var myKey = 'YOUR-KEY-GOES-HERE';

function getFreeSound(term){
	var url = 'http://www.freesound.org/apiv2/search/text/?query=' + term + '&token=';
	var myURL = url + myKey;
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			//Get the free sound ID for the first result
			var audioID = data.results[0].id;
			//Make a second request to get the file url
			getSoundContent(audioID);
		}
	});
}

function getSoundContent(soundID){
	var url = 'http://www.freesound.org/apiv2/sounds/' + soundID + '/?token=';
	var myURL = url + myKey;
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo 2!");
			console.log(data);
			//Get the link for the file
			var audioLink = data.previews['preview-hq-mp3'];
			console.log(audioLink);
			//Make Native JS - AJAX request to get the actual file
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
	//File data is binary, not text, need an arraybuffer
	request.responseType = 'arraybuffer';
	//Set success/error functionality
	request.onload = function() {
		context.decodeAudioData(request.response, function(dataBuffer) {
			console.log(request.response);
			console.log(dataBuffer);
			buffer = dataBuffer;
			$("button#play").css('background-color', 'rgb(120,220,120)');
			$("button#pause").css('background-color', 'rgb(220,120,120)');
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

//Execute the intial request
getFreeSound('lazer');

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

