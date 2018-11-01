

let size = 50;

function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
  background('magenta');
  noLoop();
}

function draw() {

fill(255, 200, 170);

for (let y = 0; y < 10; y++) {

  for (let x = 0; x < 10; x++) {

    rect(x*size,  y*size, size, size);


}
}
}
