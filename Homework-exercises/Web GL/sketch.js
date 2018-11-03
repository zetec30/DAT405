//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:


  createCanvas(400,400, WEBGL);
  

}


//Rendering function
function draw() {


  background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
  }
