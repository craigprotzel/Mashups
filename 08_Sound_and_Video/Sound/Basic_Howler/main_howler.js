//Global vars
var freeData, sound;
var myKey = 'YOUR-KEY-GOES-HERE';

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
			getSoundContent(data.results[0].id);
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
			var audioLink = data.previews['preview-hq-mp3'];
			console.log(audioLink);

			createHowl(audioLink);
		}
	});
}


function createHowl(link){
	sound = new Howl({
		urls: [audioLink],
		onload: function() {
			console.log("Done!");
			$("button#play").css('background-color', 'green');
		}
	});
}

$(document).ready(function(){
	$('#play').click(function(){
		//Howler
		sound.play();
	});
	$('#pause').click(function(){
		//Howler
		sound.pause();
	});
});

$(document).keydown(function(e) {
	console.log(e);
	console.log(e.keyCode);
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

//Make a request to FreeSound
getFreeSound('ghost');