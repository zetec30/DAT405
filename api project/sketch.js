let api = 'https://api.openweathermap.org/data/2.5/find?q=';//api open weather link
let city = 'UK';//UK cities
let units = '&units=metric';//metric units
let apikey = '&appid=9c9a5b103154eca8960230a921fca52d';//api key
let url;//url call from api
let userinput;//userinput text box
let button;//submit button var
let can;//canvas variable
let weatherData;//weather data call
let temp2;//tempature variable for main.temp
let img1, img2, img3, img4, img5, img6, img7;//images variables
let squares = [];

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
//image class holds all my images
function imageClass(){

  img1 = loadImage('assets/021-snowflake.png');
  img2 = loadImage('assets/021-winter.png');
  img3 = loadImage('assets/021-sunrise.png');
  img4 = loadImage('assets/021-sun.png');
  img5 = loadImage('assets/021-summer.png');
  img6 = loadImage('assets/021-sunset.png');
  img7 = loadImage('assets/arrow.png');
}

//button pressed function, if pressed get user input of city, submit and make the request.
function buttonPressed(){
  userinput = createInput();
  button = createButton('submit');
  button.mousePressed(makeRequest);



}



function setup() {

//image class
  imageClass();
//button pressed class
  buttonPressed();


//can variable is used to apply variables w,h to position for a center position.
  can = createCanvas(1280, 720);

  let w = (windowWidth - width) / 2;
  let h = (windowHeight - height) / 2;

  can.position(w, h);


}

//makes request for userinput value for city & and url(api);
function makeRequest(){

  city = userinput.value();
  url = api+city+units+apikey;
//loads url(api), city, units(temp) and apikey;
  loadJSON(url, getData);

}

//Gets data from api
function getData(data){
  weatherData = data
  console.log(weatherData);

}

//draws background and renderEllipse when called through its function.
function draw() {
  background(0);
  renderEllipse();


//renders ellipse based on user input of City.
function renderEllipse(){

  if (weatherData){
//weather data array
temp2 = weatherData.list[0].main.temp;





    if (temp2 <=1) { // White

        background(0, 0, 255);
        image(img1, 50, 150);
        fill(255);
        stroke(193,254,255);

    }
    if (temp2 >1 && temp2 <= 10) { // If between values change to blue
        background(0, 84, 254);
        image(img2, 50, 150);
        fill(137,240,255);
        stroke(0,190,219);
    }
    if (temp2 >10 && temp2 <= 15) { // Turqouise
        background(0, 153, 0);
        image(img3, 50, 150);
        fill(91,249,233);
        stroke(0,208,187);
    }
    if (temp2 > 15 && temp2 <= 20) { // Yellow
        background(255, 140, 102);
        image(img4, 50, 150);
        fill(255,255,0);
        stroke(255,222,0);
    }
    if (temp2 > 20 && temp2 <= 25) { // Orange
        background(255, 255, 102);
        image(img5, 50, 150);
        fill(255,150,0);
        stroke(219,124,0);
    }
    if (temp2 > 25) { // Red
        background(255, 102, 255);
        image(img6, 50, 150);
        fill(255,0,0);
        stroke(183,0,6);
    }

    // If statements change the fill and stroke of the ellipse based on the temperature value.
    stroke(10);
    strokeWeight(10);

    ellipse(900, 300, 500,500);//ellipse changes color based on the if statements above, temp2
    stroke(0, 57, 230);
    strokeWeight(5);
    ellipse(900, 300, temp2, temp2);//second ellipse with temp2 variable to change size based on tempature
    noStroke();//no stroke on text
    textSize(30);
    text('The weather in '+ weatherData.list[0].name +' is:',60, 100);//array for text in typed city and to change the color to match ellipse
    fill(0);
    text('Tempature', 820, 160);
    image(img7, 860, 160);


  }
}
}
