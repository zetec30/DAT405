//https://github.com/zetec30/DAT405.git
//https://p5js.org

//DAT405 / GAD405
//8 bit project Stav 8bit
//The purpose of this sketch is to show a drawing in rectangles
//of an appearance 8bit character

//Initialization function
function setup() {

  createCanvas(200, 200);
//background colour.
  background(255, 0, 255);
}
//function draw canvas.
function draw() {
//rectangle strokes
  stroke(0, 0);



  //1st line hair
  fill("black");
  rect(60, 10, 10, 10);
  rect(70, 10, 10, 10);
  rect(80, 10, 10, 10);
  rect(90, 10, 10, 10);
  rect(100, 10, 10, 10);
  rect(110, 10, 10, 10);
  rect(120, 10, 10, 10);
  rect(130, 10, 10, 10);



  //2nd line hair, eyes.
  fill("black");
  rect(50, 20, 10, 10);

  fill("white");
  rect(60, 20, 10, 10);
  rect(70, 20, 10, 10);
  rect(80, 20, 10, 10);

  fill("black");
  rect(90, 20, 10, 10);
  rect(100, 20, 10, 10);

  fill("white");
  rect(110, 20, 10, 10)
  rect(120, 20, 10, 10);

  fill("white");
  rect(130, 20, 10, 10);

  fill("black");
  rect(140, 20, 10, 10);




  //3rd line hair, eyes, ear.
  fill("pink");
  rect(40, 30, 10, 10);

  fill("black");
  rect(50, 30, 10, 10);

  fill("white");
  rect(60, 30, 10, 10);

  fill("brown");
  rect(70, 30, 10, 10);

  fill("white");
  rect(80, 30, 10, 10);

  fill("pink");
  rect(90, 30, 10, 10);
  rect(100, 30, 10, 10);

  fill("white");
  rect(110, 30, 10, 10);

  fill("brown");
  rect(120, 30, 10, 10);

  fill("white");
  rect(130, 30, 10, 10);

  fill("black");
  rect(140, 30, 10, 10);

  fill("pink");
  rect(150, 30, 10, 10);


  //4th line beard, ears
  rect(40, 40, 10, 10);

  fill("black");
  rect(50, 40, 10, 10);
  rect(60, 40, 10, 10);
  rect(70, 40, 10, 10);

  fill("pink");
  rect(80, 40, 10, 10);
  rect(90, 40, 10, 10);
  rect(100, 40, 10, 10);
  rect(110, 40, 10, 10);

  fill("black");
  rect(120, 40, 10, 10);
  rect(130, 40, 10, 10);
  rect(140, 40, 10, 10);

  fill("pink");
  rect(150, 40, 10, 10);

  //5th line beard, nose
  fill("black");
  rect(40, 50, 10, 10);
  rect(50, 50, 10, 10);
  rect(60, 50, 10, 10);
  rect(70, 50, 10, 10);
  rect(80, 50, 10, 10);

  fill("pink");
  rect(90, 50, 10, 10);
  rect(100, 50, 10, 10);

  fill("black");
  rect(110, 50, 10, 10);
  rect(120, 50, 10, 10);
  rect(130, 50, 10, 10);
  rect(140, 50, 10, 10);
  rect(150, 50, 10, 10);

  //6th line beard, mo
  rect(50, 60, 10, 10);
  rect(60, 60, 10, 10);
  rect(70, 60, 10, 10);
  rect(80, 60, 10, 10);
  rect(90, 60, 10, 10);
  rect(100, 60, 10, 10);
  rect(110, 60, 10, 10);
  rect(120, 60, 10, 10);

  fill("brown");
  rect(130, 60, 10, 10);

  fill("black");
  rect(140, 60, 10, 10);

  //7th line lips, beard, teeth.
  rect(60, 70, 10, 10);
  rect(70, 70, 10, 10);

  fill("red");
  rect(80, 70, 10, 10);

  fill("white");
  rect(90, 70, 10, 10);

  fill("red");
  rect(100, 70, 10, 10);

  fill("white");
  rect(110, 70, 10, 10);

  fill("black");
  rect(120, 70, 10, 10);
  rect(130, 70, 10, 10);

  //8th line beard
  rect(70, 80, 10, 10);
  rect(80, 80, 10, 10);
  rect(90, 80, 10, 10);
  rect(100, 80, 10, 10);
  rect(110, 80, 10, 10);
  rect(120, 80, 10, 10);

  //9th line beard.
  rect(80, 90, 10, 10);
  rect(90, 90, 10, 10);
  rect(100, 90, 10, 10);
  rect(110, 90, 10, 10);


  //10th line neck, shirt, beard.
  fill("pink");
  rect(80, 100, 10, 10);

  fill("white");
  rect(70, 100, 10, 10);

  fill("black");
  rect(90, 100, 10, 10);
  rect(100, 100, 10, 10);

  fill("pink");
  rect(110, 100, 10, 10);

  fill("white");
  rect(120, 100, 10, 10);


  //11th line shirt, neck.
  fill("white");
  rect(60, 110, 10, 10);
  rect(70, 110, 10, 10);

  fill("pink");
  rect(80, 110, 10, 10);
  rect(90, 110, 10, 10);
  rect(100, 110, 10, 10);
  rect(110, 110, 10, 10);

  fill("white");
  rect(120, 110, 10, 10);
  rect(130, 110, 10, 10);

  //12th line arms, shirt
  fill("pink");
  rect(60, 120, 10, 10);

  fill("white");
  rect(70, 120, 10, 10);
  rect(80, 120, 10, 10);
  rect(90, 120, 10, 10);
  rect(100, 120, 10, 10);
  rect(110, 120, 10, 10);
  rect(120, 120, 10, 10);

  fill("pink");
  rect(130, 120, 10, 10);


  //13th line srms shirt
  fill("pink");
  rect(60, 130, 10, 10);

  fill("white");
  rect(70, 130, 10, 10);
  rect(80, 130, 10, 10);
  rect(90, 130, 10, 10);
  rect(100, 130, 10, 10);
  rect(110, 130, 10, 10);
  rect(120, 130, 10, 10);

  fill("pink");
  rect(130, 130, 10, 10);


  //14th line bottom of t-shirt
  fill("white");
  rect(70, 140, 10, 10);
  rect(80, 140, 10, 10);
  rect(90, 140, 10, 10);
  rect(100, 140, 10, 10);
  rect(110, 140, 10, 10);
  rect(120, 140, 10, 10);


  //15th line start of trousers
  fill("blue");
  rect(70, 150, 10, 10);
  rect(80, 150, 10, 10);
  rect(90, 150, 10, 10);
  rect(100, 150, 10, 10);
  rect(110, 150, 10, 10);
  rect(120, 150, 10, 10);

  //16th line trousers 2nd line
  rect(70, 160, 10, 10);
  rect(80, 160, 10, 10);

  fill("blue");
  rect(110, 160, 10, 10);
  rect(120, 160, 10, 10);

  //17th line trousers 3rd line
  rect(70, 170, 10, 10);
  rect(80, 170, 10, 10);

  fill("blue");
  rect(110, 170, 10, 10);
  rect(120, 170, 10, 10);


  //18th line shoes
  fill("black");
  rect(60, 180, 10, 10);
  rect(70, 180, 10, 10);
  rect(80, 180, 10, 10);
  rect(110, 180, 10, 10);
  rect(120, 180, 10, 10);
  rect(130, 180, 10, 10);

  console.log("Searching...")
  noLoop();
}
