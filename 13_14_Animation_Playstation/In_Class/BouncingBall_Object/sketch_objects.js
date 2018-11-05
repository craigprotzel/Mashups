var bouncingBalls = [];

function setup() {
  createCanvas(800, 600);
  background(175, 255, 175);

  for (var i = 0; i < 10; i++){
    var posX = random(50,width-50);
    var posY = random(50,height-50);
    var diameter = random(50,100);
    var speedX = random(-5,5);
    var speedY = random(-5,5);

    var aBall = new BouncingBall(posX, posY, diameter, speedX, speedY, i);
    bouncingBalls.push(aBall);
  }
}

function draw() {
  background(175, 255, 175);
  for (var i = 0; i < bouncingBalls.length; i++){
    bouncingBalls[i].draw();
    bouncingBalls[i].update();
  }
}

function mousePressed(){
  for (var i = 0; i < bouncingBalls.length; i++){
    bouncingBalls[i].clicked();
  }
}

//Bouncing Ball Class
function BouncingBall(posX, posY, diameter, speedX, speedY, num){

  this.num = num;

  this.posX = posX;
  this.posY = posY;
  this.diameter = diameter;

  this.speedX = speedX;
  this.speedY = speedY;

  //fill color values
  this.r = random(0,255);
  this.g = random(0,255);
  this.b = random(0,255);

  this.draw = function(){
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.posX, this.posY, this.diameter);
  };

  this.update = function(){
    if (this.posX > (width - this.diameter/2)|| this.posX < this.diameter/2){
      this.speedX = this.speedX * -1;
    }
    this.posX = this.posX + this.speedX;

    if (this.posY > (height - this.diameter/2) || this.posY < this.diameter/2){
      this.speedY = this.speedY * -1;
    }
    this.posY = this.posY + this.speedY;
  };

  this.clicked = function(){
    var theDistance = dist(mouseX, mouseY, this.posX, this.posY);
    if (theDistance < this.diameter/2){
        console.log(this.num);
        console.log(this);

        var theSpan = document.getElementById('the-num');
        theSpan.innerHTML = this.num;
    }
  };
}