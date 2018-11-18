let t;//noise variable t.
let t1;//noise variable t1.

function setup() {
  //creates a canvas.
  createCanvas(841, 594);
  //gives canvas center position.
  canvas.style = "position: absolute; top: 230px; left: 400px; border:5px solid grey";

stroke(0, 3);


  //no fill.
  noFill();
  // variable for t..
  t = 0;
  // variable for t1..
  t1 = 0;

}
function draw(){


//begins shape
beginShape();

//coordinates by position, X, Y. noise random.
  let x1 = width * noise(t + 10);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);
//coordinates for v, w noise random,second bezier.
  let v1 = width * noise(t + 50);
  let v2 = width * noise(t + 70);
  let v3 = width * noise(t + 90);
  let v4 = width * noise(t + 110);
  let w1 = height * noise(t + 130);
  let w2 = height * noise(t + 150);
  let w3 = height * noise(t + 170);
  let w4 = height * noise(t + 190);
//bezier coordinates 1
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
//bezier coordinates 2
  bezier(v2, w2, w1, v1, w4, v3, w3, v4);


//ellipse,, noise motion/R, G, B.. random colours at coordinates.
  let x = width * noise(t1);
  let y = height * noise(t1 + 50);
  let r = 255 * noise(t1 + 40);
  let g = 255 * noise(t1 + 60);
  let b = 255 * noise(t1 + 80);
//ellipse no stroke..

  //elllipse fill variables from above.

stroke(r, g, b,);
  // ellipse, with x, y variables from above.
rect(x, y, 100, 100);

//speed at which both t and t1 move.
  t += 0.002;
  t1 += 0.003;

//ends shape.
endShape();

}


//if mouse is pressed variable t changes stroke colour!
function mousePressed() {
if ( t == mousePressed ){
  stroke(random(255), random(255), random(255));

  } else {

  stroke(random(255), random(255), random(255));

  }

}

function refreshPage(){
    window.location.reload();
}
