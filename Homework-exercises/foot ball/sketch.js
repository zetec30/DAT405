
var leg0;
var soundFile;

function preload() {
leg0 = loadImage("images/leg.png");
soundFormats('mp3', 'ogg');
  soundFile = loadSound('sound/Benny-hill-theme.mp3');
}


function setup() {
  createCanvas(594, 841);

}

function draw() {

 frameRate(20);

  background('grey');



  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 40.0);

  fill(random(255), random(255), random(255));
  ellipse(0, 0, 100, 100);

  fill('red');
  ellipse(0, 0, 50, 50);

  fill(random(255), random(255), random(255));
  ellipse(0, 0, 30, 30);

  fill('black');
  ellipse(-100, 100, 40, 40);
  image(leg0,);


}






function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;


  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);


}
