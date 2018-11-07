//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var x = 0;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:


  createCanvas(400,400);
  background('red');

}


//Rendering function
function draw() {




  for (let x = 0; x < width; x++){
    stroke(2);
    point(x, random(height));
  }
}
