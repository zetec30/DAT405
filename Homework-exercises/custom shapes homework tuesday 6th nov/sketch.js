let sizeRandom = 100;


//draw a spinning torus with radius 200 and tube radius 60
function setup() {
  createCanvas(800, 800,);
  frameRate(10);

  translate(width/2, height/2);


  var radius = 100;
  var radius2 = 200;
  beginShape();

  fill(random(255), random(255), random(255));
  stroke(0, 1);
  for(var i = 0; i < 10; i++) {

    var s = sin(radians(i * 40)) * radius;
    var t = cos(radians(i * 40)) * radius;
    var x = cos(radians(i * 36)) * radius;
    var y = sin(radians(i * 36)) * radius;
    vertex(x, y);
    vertex(t, s);

    if(radius == 100) {
      radius = 50;
    } else {
      radius = 100;
    }

  }
  endShape()
}
