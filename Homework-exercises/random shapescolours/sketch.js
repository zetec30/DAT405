function setup() {
  createCanvas(720, 400);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  for (var i = 0; i < 15; i++) {
      fill(random(255), random(255), random(255));
    triangle(random(-40, 220), random(height),
         random(-40, 220), random(height),
         random(-40, 220), random(height),
        random(-40, 220), random(height));
      fill(random(255), random(255), random(255));;
    rect(random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height));
      fill(random(255), random(255), random(255));
    ellipse(random(320, 580), random(height),
         random(320, 580), random(height),
         random(320, 580), random(height),
         random(320, 580), random(height));
      fill(random(255), random(255), random(255));
    rect(random(500, 760), random(height),
         random(500, 760), random(height),
         random(500, 760), random(height),
         random(500, 760), random(height));
  }
  frameRate(10);
}
