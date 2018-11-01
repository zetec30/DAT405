//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:


  createCanvas(400,400);

}


//Rendering function
function draw() {
  //Set a background color
  background(255, 153, 51);
  //setcolours

stroke('yellow');
strokeWeight(4);
line(30, 30, 370, 370);

stroke('red');
strokeWeight(4);
line(30, 30, 370, 30 );

stroke('blue');
strokeWeight(4);
line(30, 30, 30, 370);

stroke('green');
strokeWeight(4);
line(370, 370, 30, 370);

stroke('purple');
strokeWeight(4);
line(370, 30, 370, 370);

stroke('orange');
strokeWeight(4);
line(370, 30, 30, 370);

fill(255,0,255);
ellipse(30, 30, 50, 50);
stroke('black');

strokeWeight(4);
fill(0,0,255);
stroke('black');
strokeWeight(4);

ellipse(370, 370, 50, 50);
fill(153, 204, 255);
stroke('black');
strokeWeight(4);

ellipse(370, 30, 50, 50);
fill(255,255,255);
stroke('black');
strokeWeight(4);

ellipse(30, 370, 50, 50);
stroke('black');
strokeWeight(4);




  console.log("Searching...")
  noLoop();
}
