//Global vars
var freeData, sound;
//var myKey = 'YOUR-KEY-GOES-HERE';

var soundIsReady = false;

/*******************/
//FreeSound Requests
/*******************/

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
	//console.log(e.keyCode);
	var curKey = e.keyCode;

	switch(curKey){
		//Up
		case 38:
			//Howler
			sound.pause();
			sound._rate += 0.1;
			sound.play();
			break;
		//Down
		case 40:
			//Howler
			sound.pause();
			sound._rate -= 0.1;
			sound.play();
			break;
	}
});

$(document).ready(function(){
	$('#play').click(function(){
		//Howler
		if (soundIsReady){
			sound.play();
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
	getFreeSound('ghost');
});