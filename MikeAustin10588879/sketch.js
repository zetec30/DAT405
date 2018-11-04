var t;//noise variable.



function setup() {
  //song = loadSound('Audio/boing_x.wav');
  createCanvas(594, 841);
  stroke(0, 20);
  noFill();

  t = 0;
}
//draw area.
function draw() {
//begins shape
beginShape();
//coordinates by position, X, Y.
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


//ends shape.
endShape();

}

//if mouse is pressed check condition if computer 1 is playing then stop. Else computer 1 play sound and randomize colour.

function mousePressed() {
if ( t == mousePressed ){
  fill(random(255), random(255), random(255));
  } else {

  fill(random(255), random(255), random(255));
  }
}
