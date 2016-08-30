var curSound;

var chimes, high_hat_01, high_hat_02;
var soundOptions = [];

function preload(){
	chimes = loadSound('media/chimes.wav');
	chimes.playMode('sustain');
	chimes.name = 'chimes';
	soundOptions.push(chimes);

	high_hat_01 = loadSound('media/high_hat_01.wav');
	high_hat_01.playMode('sustain');
	high_hat_01.name = 'high_hat_01';
	soundOptions.push(high_hat_01);

	high_hat_02 = loadSound('media/high_hat_02.wav');
	high_hat_02.playMode('sustain');
	high_hat_02.name = 'high_hat_02';
	soundOptions.push(high_hat_02);
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	var curNum = Math.floor(Math.random()*soundOptions.length);
	curSound = soundOptions[curNum];
	console.log(curSound);
}

function draw(){
}
	
function mousePressed(){
	//curSound.play();
	//console.log('Playing local');
	grabAndSend(curSound);
}

//----------CLIENT-SIDE SOCKET CODE----------//
//Init socket object
var socket = io();

//Receive data from the server using .on()
socket.on('news', function (data) {
	console.log(data);
	playSound(data);
});

function playSound(data){
	var theSoundName = data.sound;
	if (theSoundName == 'chimes'){
		chimes.play();
	}
	else if (theSoundName == 'high_hat_01'){
		high_hat_01.play();
	}
	else if (theSoundName == 'high_hat_02'){
		high_hat_02.play();
	}
	console.log('Playing remote');
}

//Send data to the server using .emit()
function grabAndSend(curSound){
	var data = {
		sound: curSound.name
	};
	socket.emit('sounds', data);
}

//----------WINDOW RESIZE-----------//
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}