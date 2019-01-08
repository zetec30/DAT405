var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;
var speed=0;
var cSpeed=0;
var cNumber=10;
  // var map;

function setup() {
  // noCanvas();
  createCanvas(400, 400);
}
function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(255);
  winddraw();

}




function initMap() {


        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 0,
          center: {lat: -33.865427, lng: 151.196123},
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');

        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'http://api.openweathermap.org/data/2.5/weather?q=&APPID=001b0f58045147663b1ea518d34d88b4&units=metric';
        document.getElementsByTagName('head')[0].appendChild(script);

        map.data.setStyle(function(feature) {
          var magnitude = feature.getProperty('mag');
          return {
            icon: winddraw(magnitude)
          };
        });
      }


function winddraw(){

 if (weather) {
    var wind = weather.wind.speed;
    var temp = weather.main.temp;
  	var hum = weather.main.humidity;
    fill(200);
    text('wind speed : '+wind,width/2-50,320);
    text('temperature : '+temp,width/2-50,340);
   	text('humidity : '+hum,width/2-50,360);
    speed=speed+0.5;
		for (var i = 0; i < cNumber; i++) {
		push();


		fill(100,100,100,hum+100);
		noStroke();
		translate(width/2, height/2-40);
  	rotate(TWO_PI * i / cNumber);
	  rotate(PI/2*0.01*speed*wind);
	  rect( 5, 5, 5,35);

		pop();

	}
  }
}

      function eqfeed_callback(results) {
        map.data.addGeoJson(results);
      }
