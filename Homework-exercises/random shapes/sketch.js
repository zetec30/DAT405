//Global variable for the size
let size;
let size2;
function setup() {
  createCanvas(500, 500);
  frameRate(20); //Drawing speed 30 fps
  noStroke();
}

function draw() {
  //Create a new random number for every frame (0 to 200 pixels)
  size = random(200);
  size2 = random(250);
  //Call the customShape function
  customShape();
}

//When the function is called, it will draw a shape with random position and color
function customShape(){
  fill(random(255), 0, random(255), random(255));
  ellipse(random(500), random(500), size, size);

  if (key === 'a') {
    stop();
  } else if (key === 'b') {
    fill(random(255), 0, random(255), random(255));
    rect(random(500), random(500), size2, size2);
  }

}
