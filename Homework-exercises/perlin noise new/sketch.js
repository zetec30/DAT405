
var xoff1 = 0;
var xoff2 = 100;

function setup() {
  createCanvas(594, 841);


}


function draw() {
  background(51);

  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);

  xoff1 += 0.02;
  xoff2 += 0.02;


  ellipse(x, y, 40, 40);

  if (mouseIsPressed) {
      x(50, 50, 50, 50);
    } else {
      rect(25, 25, 50, 50);
    }

    print(mouseIsPressed);

}
