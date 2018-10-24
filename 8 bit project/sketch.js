//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: Mad House")
  createCanvas(594,841);
}

//Rendering function
function draw() {
  //Set a background color
  background(0, 128, 255);
  //rectangle
  rect(width/2, height/2,50,50)
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Searching...")
  noLoop();
}
