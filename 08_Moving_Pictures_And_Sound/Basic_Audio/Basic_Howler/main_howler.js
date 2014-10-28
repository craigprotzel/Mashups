/*
You will need a FreeSound.org API KEY to run this example
http://www.freesound.org/help/developers/
*/
var myKey = 'YOUR-KEY-GOES-HERE';
var sound;

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
			var audioLink = data.previews['preview-hq-mp3'];
			console.log(audioLink);

			//HowlerJS
			sound = new Howl({
				urls: [audioLink]
			});
			$("button#play").css('background-color', 'rgb(120,220,120)');
			$("button#pause").css('background-color', 'rgb(220,120,120)');
		}
	});
}

//Execute the intial request
getFreeSound('lazer');

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