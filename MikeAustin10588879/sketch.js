var t;
var cnv;
var computer1;


function setup() {
computer1 = loadSound('Audio/beverly_computer1.wav');
cnv = createCanvas(594, 841);
  stroke(0, 20);
  noFill();
  t = 0;
}

function draw() {

beginShape();

  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  bezier(x2, y2, y1, x1, y4, x3, y3, x4);

  t += 0.005;



endShape();

}
function mousePressed() {
  if ( computer1.isPlaying() ) { // .isPlaying() returns a boolean
    computer1.stop();
    background(255,0,0);
  } else {
    computer1.play();
    background(0,255,0);
  }
}
