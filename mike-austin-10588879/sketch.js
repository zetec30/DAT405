let caudio, kaudio;
let can;
let x, y, i;
let t, t1;
let button, button2, button3, button4;
let s;



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
kaudio = createAudio('Audio/MidAir.mp3')
//button setup position, creation, and paramater
button = createButton('Dubstep');
button.position(0, 100);
button.mousePressed(clicked);

//button2 refreshes page.
button2 = createButton('Refresh Page');
button2.position(0, 440);
button2.mousePressed(refreshPage);

button3 = createButton('Stop Music');
button3.position(0, 300);
button3.mousePressed(stopMusic);

button4 = createButton('MidAir');
button4.position(0, 200);
button4.mousePressed(midairplay);


// BACKGROUND BLACK
background(0);

//THESE ARE MY VARIABLES USED IN X-Y NOISE FUNCTIONS (SET TO 0) coordinates.
t = 0;
t1 = 0;
// s = bezier(x1, y1, x2, y2, x3, y3, x4, y4);




}
//DRAWING LOOP
function draw(){




//START OF SHAPE
beginShape();


//coordinates by position, variables X1-4, Y1-4. noise random t variable + 0, 15, 25 so on.
let x1 = width * noise(t + 0);
let x2 = width * noise(t + 15);
let x3 = width * noise(t + 25);
let x4 = width * noise(t + 35);
let y1 = height * noise(t + 45);
let y2 = height * noise(t + 55);
let y3 = height * noise(t + 65);
let y4 = height * noise(t + 75);




//RGB VARIABLES WITH ADDED NOISE FOR SMOOTH COLOUR CHANGES THROUGHT THE RGB SPECTRUM
let r = 255 * noise(t1 + 10);
let g = 255 * noise(t1 + 15);
let b = 255 * noise(t1 + 25);



//END OF SHAPE
endShape();


//VARIABLE NOISE frames t 0.004, t1 0.01.
t += 0.004;
//RGB NOISE
t1 += 0.01;



// //LOOP 1 Y FROM THE LOOP INTO coordinates, ADDED +=20 AND RANDOM ROTATE OF 90, colour change g, r, b.
for (let y = 0; y < width; y+=10){
    push();
      translate(width/2, height/2);
        rotate(random(45));
          stroke(g, r, b);
            strokeWeight(0.1);
              noFill();
               ellipse(y4, x1, 7, y);
                pop();



  }
//LOOP 2 X VARIABLE WITH THE ADDED RGB VARIABLES, TRANSLATE FOR CENTER, PUSH/POP TO MAKE THE SHAPE MOVE
//USED THE NOISE FUNCTION X4-Y4 FROM MY NOISE SETUP. ADDED RANDOM ROTATE TO 45. x from loop in size.
for (let x = 0; x < width; x+=10){
  push()
    translate(width/2, height/2);
      rotate(random(45));
        stroke(r, g, b,);
          strokeWeight(4);
            point(x1, y4, 2, x);
              pop();



  }




//loop 3 i variable using lines, colour change b, g, r. i of loop in position x, y.
 for (let i = 0; i < width; i+=200){
 push()
   translate(width/2, height/2);
     rotate(random(45));
       stroke(b, g, r);
         strokeWeight(0.2);
           line(50, 2, i, 2 );
             pop();

    }

}


// click button to play music
function clicked(){

  caudio.play();
  kaudio.stop();
}


function midairplay(){

  kaudio.play();
  caudio.stop();

}


function refreshPage(){

  window.location.reload();


}
function stopMusic(){

  caudio.stop();
  kaudio.stop();

}
