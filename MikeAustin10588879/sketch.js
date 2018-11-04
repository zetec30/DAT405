let t;//noise variable.
let t1;


function setup() {
  //song = loadSound('Audio/boing_x.wav');
  createCanvas(841, 594);
  canvas.style = "position: absolute; top: 250px; left: 400px; border:5px solid grey"
  stroke(0, 20);
  noFill();
  t = 0;
  t1 = 90;
}
//draw area.
function draw() {


//begins shape
beginShape();
//coordinates by position, X, Y. noise random.
  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  bezier(x2, y2, y1, x1, y4, x3, y3, x4);

  let x = width * noise(t1);
  let y = height * noise(t1 + 5);
  let r = 255 * noise(t1 + 10);
  let g = 255 * noise(t1 + 15);
  let b = 255 * noise(t1 + 20);

  noStroke();
  fill(r, g, b);
  ellipse(x, y, 50, 50);

  t += 0.005;
  t1 = t + 0.01;

//ends shape.
endShape();

}



function mousePressed() {
if ( t == mousePressed ){
  fill(random(255), random(255), random(255));
  } else {

  fill(random(255), random(255), random(255));
  }

}
