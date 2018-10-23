//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:


  createCanvas(720,400);

}


//Rendering function
function draw() {
  //Set a background color
  background(200);
  //setcolours
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  //Rectangle
rect(40, 120,120,40);
  //eclipse
  ellipse(240, 240, 80, 80);

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Searching...")
  noLoop();
}
