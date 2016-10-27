var sound;

function preload(){
  sound = loadSound('chimes.wav');
  console.log("Sound is ready!");
}

function setup() {
	createCanvas(400,400);
	background(100,150,200);
}

function draw() {
	background(100,150,200);
  fill(0);
  noStroke();

  //Check if mouse is in the box
  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    background(200,150,100);
    fill(75, 200,50);
    //Check if sound is already playing
    if (!sound.isPlaying()){
      console.log("Play the sound!");
      sound.play();
    }
  }
  else{
    sound.stop();
  }

  rect(width/2, height/2, width/2, height/2);
  fill(255);
  ellipse(mouseX,mouseY,60,60);
}