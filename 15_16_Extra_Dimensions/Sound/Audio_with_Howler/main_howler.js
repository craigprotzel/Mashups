var myKey = 'YOUR-KEY-GOES-HERE';
var soundIsReady = false;

/*******************/
//FreeSound Requests
/*******************/
//Second Request to FreeSound for Sound File Location
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
			var audioLink = data.previews['preview-hq-mp3'];
			console.log(audioLink);

			createHowl(audioLink);
		}
	});
}

//Initial Request to FreeSound
function getFreeSound(term){
	//This is for Freesound API v2
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
			if (data.results.length){
				getSoundContent(data.results[0].id);
			}
			else{
				alert("Uh oh, we got problems... No sounds for that string!");
			}
		}
	});
}

/************/
//Howler Code
/************/
var sound;
function createHowl(link){
	var links = [link];
	sound = new Howl({
		src: links,
		onload: function() {
			console.log("Done!");
			soundIsReady = true;
			$("button#play").css('background-color', 'green');
		}
	});
}

/**********************/
//DOM Events with jQuery
/**********************/
$(document).keydown(function(e) {
	//console.log(e);
	console.log(e.keyCode);
	var curKey = e.keyCode;


	var curRate;
	switch(curKey){
		//Up
		case 38:
			curRate = sound._rate;
			sound.rate(curRate + 0.1);
			break;
		//Down
		case 40:
			//Howler
			curRate = sound._rate;
			sound.rate(curRate - 0.1);
			break;
		//Left Arrow - lower frequency
		case 37:
			sound.stereo(-1);
			break;
		//Right Arrow - raise frequency
		case 39: 
			sound.stereo(1);
			break;
		//Space Bar
		case 32:
			sound.stereo(0);
	}
});

$(document).ready(function(){
	$('#play').click(function(){
		//Howler
		if (soundIsReady){
			sound.play();
			console.log(sound);
		}
		else{
			alert("Still waiting for the sound to load. The play button will turn green when the sound is ready.");
		}
	});
	$('#pause').click(function(){
		//Howler
		if (soundIsReady){
			sound.pause();
		}
		else{
			alert("Still waiting for the sound to load. The play button will turn green when the sound is ready.");
		}
	});

	//Make initial request to FreeSound API
	getFreeSound('chimes');
});