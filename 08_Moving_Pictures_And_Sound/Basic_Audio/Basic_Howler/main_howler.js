var freeData, sound;

function getFreeSound(term){
	//This is for the Freesound v1 api, which is now deprecated for v2...
	var url = 'http://www.freesound.org/api/sounds/search/?q=' + term + '&api_key=';
	//var myKey = 'YOUR-KEY-GOES-HERE';
	var myKey = 'dfb706550f95738140ea58b0baaa1745876de52d';
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
			freeData = data;
			var audioLink = freeData.sounds[1]['preview-hq-mp3'];
			console.log(audioLink);

			//HowlerJS
			sound = new Howl({
				urls: [audioLink]
			});
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

getFreeSound('lazer');