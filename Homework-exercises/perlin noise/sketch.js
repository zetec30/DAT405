
var xoff1 = 0;


function setup() {
  createCanvas(594, 841);


}


function draw() {
  background(51);

  var x = map(noise(xoff1), 0, 1, 0, width);


  xoff1 += 0.02;


  ellipse(x, 100, 40, 40);


}
