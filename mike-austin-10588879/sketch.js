let caudio;
let can;
let x;
let t, t1;
let analyzer;




function setup() {


  can = createCanvas(841, 594);
  let w = (windowWidth - width) / 2;
  let h = (windowHeight - height) / 2;
  can.position(w, h);
  can.style("border:5px solid grey");
  caudio = createAudio('Audio/dubstep.mp3');

  background(0);


  t = 0;
  t1 = 0;





}

function draw(){





  beginShape();




  //coordinates by position, X1-4, Y1-4. noise random.
  let x1 = width * noise(t + 0);
  let x2 = width * noise(t + 15);
  let x3 = width * noise(t + 25);
  let x4 = width * noise(t + 800);
  let y1 = height * noise(t + 45);
  let y2 = height * noise(t + 55);
  let y3 = height * noise(t + 65);
  let y4 = height * noise(t + 800);




  let r = 255 * noise(t1 + 40);
  let g = 255 * noise(t1 + 60);
  let b = 255 * noise(t1 + 80);



  endShape();

  t += 0.004;
  t1 += 0.01;



  for (let x = 0; x < width; x+=30){
    push()
    translate(width/2, height/2);
    rotate(random(45));
    stroke(r, g, b);
    strokeWeight(3);
    point(x4, y4, 10, 10);
    pop();
  }

  for (let y = 0; y < width; y+=10){
    push();
    translate(width/2, height/2);
    rotate(random(90));
    stroke(r, g, b);
    strokeWeight(3);
    point(10, y, 19, 19);
    pop();



  }
  for (let i = 0; i < width; i+=5){
    push();
    translate(width/2, height/2);
    rotate(random(90));
    stroke(r, g, b);
    strokeWeight(0.05);
    line(10, i, 19, 19);
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
