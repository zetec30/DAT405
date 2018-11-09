//Global variable for the siz
let size;
let size2;
let r, e, f, b, k;// variables inline;
let can;



function setup() {
  can = createCanvas(300, 200);
  canvas.style = "position: absolute; top: 400px; left: 550px; border:5px solid grey";
  background('whitesmoke');
  frameRate(6);
  noStroke();

}

function draw() {
  //Create a new random number for every frame (0 to 200 pixels)
  size = random(100);
  //Create a new random number for every frame (0 to 800 pixels)
  size2 = random(150);
  //fill variable
  f = fill(random(255), 0, random(255), random(255));


  //Call the customShape function
  customShape();
}

//When the function is called, it will draw a shape with random position and color
function customShape(){


  e;
  r;
  b;
  k;


  if (keyCode === UP_ARROW){
 stroke(20);
  e = ellipse(random(300), random(300), size2, 200 );

  }else if

  (keyCode === DOWN_ARROW){

    fill(random(255), random(255), random(255));
    r = rect(random(300), random(300), size, size, 150, 20/2);

  }
    //if key pressed is equal to left arrow, then..
  if (keyCode === LEFT_ARROW){

    //Random text....
    fill(random(255), random(255), random(255));
    b = triangle(random(300), random(300), size2, size2, 40, 40);

  }else if (keyCode === RIGHT_ARROW) {

   k = rect(random(300), random(300), 50, 50 * 40, 20/2);



  }
}
