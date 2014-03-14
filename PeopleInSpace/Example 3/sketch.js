// Code taken from:
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];
var attractor;

var canvas;

function setup() {
  canvas = createGraphics(640,360);
  canvas.position(200,200);
  canvas.class("deepBlue");

  attractor = new Attractor();
}

var startDataAnimation = false;
function draw() {
  background(255);

  attractor.display();

  if (dataIsReady){
    for (var i = 0; i < spaceData.number; i++) {
        movers[i] = new Mover(random(0.1,2),random(width),random(height));
    }
    dataIsReady = false;
    startDataAnimation = true;
  }

  if (startDataAnimation){
    for (var j = 0; j < movers.length; j++) {
      var force = attractor.attract(movers[j]);
      movers[j].applyForce(force);

      movers[j].update();
      movers[j].display();
    }
  }
}