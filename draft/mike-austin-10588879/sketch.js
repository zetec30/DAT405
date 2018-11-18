let caudio;
let can;
let x, y, i;
let t, t1;





function setup() {

//CANVAS, ADDED A VARIABLE INCASE I WANTED TO CHANGE THE CANVAS PROPERTIES
can = createCanvas(841, 594);
//VARIABLES SETS THE CANVAS DEAD CENTER
let w = (windowWidth - width) / 2;
let h = (windowHeight - height) / 2;

//ABOVE VARIABLES USED FROM ABOVE
can.position(w, h);

//STYLE TO ADD A 5PX BORDER AROUND THE CANVAS
can.style("border:5px solid grey");

//VARIABLE TO ADD AUDIO, FOUND THIS PART THE HARDEST.
caudio = createAudio('Audio/dubstep.mp3');



// BACKGROUND BLACK
background(0);

//THESE ARE MY VARIABLES USED IN X-Y NOISE FUNCTIONS (SET TO 0)
t = 0;
t1 = 0;





}
//DRAWING LOOP
function draw(){

//ADDED CAPACITY TO THE CANVAS, EACH FRAME FILLS A CAPACITY OF BLACK
// background(0, 1);


//START OF SHAPE
beginShape();



//coordinates by position, X1-4, Y1-4. noise random.
let x1 = width * noise(t + 0);
let x2 = width * noise(t + 15);
let x3 = width * noise(t + 20);
let x4 = width * noise(t + 25);
let y1 = height * noise(t + 30);
let y2 = height * noise(t + 35);
let y3 = height * noise(t + 40);
let y4 = height * noise(t + 45);


//RGB VARIABLES WITH ADDED NOISE FOR SMOOTH COLOUR CHANGES THROUGHT THE RGB SPECTRUM
let r = 255 * noise(t1 + 10);
let g = 255 * noise(t1 + 15);
let b = 255 * noise(t1 + 25);

//triangle RGB WITH PERLIN NOISE
noFill();
  stroke(r, g, b);
    strokeWeight(0.4);
      triangle(x1, y1, x2, y2, x3, y3, x4, y4);
if (frameCount === 20){
      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}

//END OF SHAPE
endShape();
//VARIABLE NOISE
t += 0.004;
//RGB NOISE
t1 += 0.01;



// //LOOP 1 ADDED THE Y FROM THE LOOP AND X1-Y4 AND frameCount/2 FROM THE LOOP INTO coordinates, ADDED +=10 AND RANDOM ROTATE OF BETWEEN 0-45
for (let y = 0; y < width; y+=10){
    push();
      translate(width/2, height/2);
        rotate(random(45));
          stroke(r, g, b);
            strokeWeight(0.1);
              point( 7, y, x1, y4, 50);
                pop();



  }
  //LOOP 2 X VARIABLE WITH THE ADDED RGB VARIABLES, TRANSLATE FOR CENTER, PUSH/POP TO MAKE THE SHAPE MOVE
  //USED THE NOISE FUNCTION X1-Y4 FROM MY NOISE SETUP. ADDED RANDOM ROTATE TO 45.
for (let x = 0; x < width; x+=10){
  push()
    translate(width/2, height/2);
      rotate(random(45));
        stroke(r, g, b);
          strokeWeight(0.1);
            point(x1, y4, x, x);
              pop();



  }

for (let i = 0; i < width; i+=10){
  push();
    translate(width/2, height/2);
      rotate(random(45));
        stroke(r, g, b);
          strokeWeight(0.01);
            line(x1, i, 2, 2);
              pop();



 }


    }


function mouseClicked() {
//canvas element when it's clicked

//if statement tests whether or not the mouse is over the canvas!.
if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {

  caudio.play();




}


    }
