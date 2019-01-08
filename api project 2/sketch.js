//weather color
var wCol = {
  rain: '#183059',
  clear: '#F9ECE5',
  clouds: '#276FBF',
  snow:'#DDF3FF',
  line:'#ffffff',
  ho:'#F03A47'
}

var linesNum = 50;
var squaresNum = 16;

// API
var api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var city = 'UK';
var appid = '&APPID=9c9a5b103154eca8960230a921fca52d';
var units = '&units=metric';
var cnt = '&cnt=16';

var input;
var span;
var weatherData;
var weather = [];
var count = 0;

//wave
var xspacing = 10;
var theta =0;
var amplitude = 10;
var period =500;
var dx;
var xvalues;
var thetaSpeed=0.05;
var a =0;


//sketch
var squares = [];
var lines = [];
var texts = [];
function Square(x, y, d,s,col) {
  this.x = x;
  this.y = y;
  this.d = d;
  this.s = s;
  this.col = col;
  this.x2 = x;
  this.y2 = y;

  this.display = function() {
    rect(this.x, this.y, this.d, this.d,3);
  }

  this.move = function() {
      this.x = width/2 + xvalues[this.s];
      this.y = height/2 - xvalues[this.s];
      // console.log(xvalues[this.s]);

  }
}

function Line(x,y,square){
	this.x1 = x;
	this.y1 = y;
	this.x2 = square.x;
	this.y2 = square.y;

	this.display = function(){
		line(this.x1, this.y1, this.x2, this.y2);
	}
}


function setup() {
  //canvas
  can = createCanvas(600, 600);

  let w = (windowWidth - width) / 2;
  let h = (windowHeight - height) / 2;

  can.position(w, h);

  //input
  input = select('#city');
  span = select('#spanValue');

  // input.position(width/2-input.width/2,height/2-input.height/2);

  //square array
  for (var i = 0; i < squaresNum; i++) {
    squares[i] = new Square(width / 2, height / 2, (squaresNum - i) * ceil(width/squaresNum),i,wCol.snow);
  }

  xvalues = new Array(squaresNum);
  dx = (TWO_PI / period) * xspacing;

}


//callback function
function askData() {
  var url = api + input.value() + appid + units + cnt;
  loadJSON(url, gotData);
}

function gotData(data) {
  for (var i = 0; i < data.list.length; i++) {
    println(data.list[i].weather[0].main);
    weather[i]=data.list[i].weather[0].main;
  }
}


function draw() {


  background(wCol.line);

  // background(200);
  input.position(width/2-input.width/2+ xvalues[0],height/2-input.height/2);
  calcWave();

  //draw squares
  rectMode(CENTER);
  for (var i = 0; i < squaresNum; i++) {
    fill(squares[i].col);
    stroke(wCol.line);
    squares[i].display();
    squares[i].move();
  }

  //draw lines
  for (var j = 0; j < linesNum; j++){
    lines[j] = new Line(width/(linesNum-1)*j,0,squares[squaresNum-1]);
    lines[linesNum+j] = new Line(width/(linesNum-1)*j,600,squares[squaresNum-1]);
  }

  for (var n = 0; n < linesNum*2; n++) {
    stroke(255,255,255,130);
    lines[n].display();
  }

  //change the weather color
  for (var j = 0; j <squaresNum ; j++) {
    if (weather[j]) {
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(10);
      text(j,squares[j].x, j * 17.5+32);
      colorChange(weather[j],squares[j]);
    }
  }

  // graphic();
  if(count>0){
  hoverColor3();
}
}



//wave
function calcWave(){
  theta += thetaSpeed;
  var x = theta;
  for (var i = 0; i < xvalues.length; i++){
    xvalues[i] = sin(x)*amplitude;
    x+= dx;

  }
}


//inteeaction
function keyPressed(){
  if(keyCode == ENTER){
    askData();
    count += 1;
  }
}

function colorChange(weather,square){
  if(weather == 'Rain'){
    square.col = wCol.rain;
  }else if(weather == 'Clear'){
    square.col = wCol.clear;
  }else if(weather == 'Clouds'){
    square.col = wCol.clouds;
  }else if(weather == 'Snow'){
    square.col = wCol.snow;
  }
}


function graphic(){
    // symbol();
  noStroke();
  fill(255,255,255,150);
  rect(110,490,100,120,3);

  fill(wCol.rain);
  rect(110,460,80,20,3);
  fill(wCol.clouds);
  rect(110,490,80,20,3);
  fill(wCol.clear);
  rect(110,520,80,20,3);

  fill(255,255,255);
  noStroke();
  textAlign(CENTER);
  textSize(10);
  text("Rain",110,465);
  text("Clouds",110,495);
  text("Clear",110,525);
}

function hoverColor(){
  for(var i = 0; i< 16; i++){
    if(mouseX > squares[i].x -((16 - i) * ceil(width/squaresNum))/2 && mouseX < squares[i].x +((16 - i) * ceil(width/squaresNum))/2){
      squares[i].col = wCol.ho;
    }
  }
}

function hoverColor2(){
  for(var i = 0; i< 16; i++){
    if(mouseX > squares[i].x -((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseX < squares[i].x +((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseY > squares[i].y -((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseY < squares[i].y +((squaresNum+2 - i) * ceil(width/squaresNum))/2
      ){
      squares[i].col = wCol.ho;
      if(i>0){
      colorChange(weather[i-1],squares[i-1])};
    }
  }
}

function hoverColor3(){
  for(var i = 0; i< squaresNum; i++){
    if(mouseX > squares[i].x -((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseX < squares[i].x +((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseY > squares[i].y -((squaresNum+2 - i) * ceil(width/squaresNum))/2 &&
      mouseY < squares[i].y +((squaresNum+2 - i) * ceil(width/squaresNum))/2
      ){
      squares[i].col = wCol.ho;
      speedChange(weather[i]);
      // colorChange(weather[i],squares[i])};
      if(i>0){
      colorChange(weather[i-1],squares[i-1])};
      // squares[i-1].col = wCol.ho;
    }
  }
}

function printData(){
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(10);
      for(var i = 0; i< texts.length; i++){
      text(j,squares[j].x, j * 17.5+32);
      }
}

function speedChange(weather){
    if(weather == 'Rain'){
    thetaSpeed = 0.1;
  }else if(weather == 'Clear'){
    thetaSpeed = 0.01;
  }else if(weather == 'Clouds'){
    thetaSpeed = 0.05;
  }else if(weather == 'Snow'){
    thetaSpeed = 0.2;
  }
}
