var sound;

function setup() {
	createCanvas(400,400);
	background(100,150,200);
	sound = loadSound('chimes.wav');
}

function draw() {
	background(100,150,200);
  fill(0);

  if (mouseX > width/2 && mouseY > height/2){
    background(200,150,100);
    fill(75, 200,50);
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