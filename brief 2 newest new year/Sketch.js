let weather;
let giphyData;
let mapsDatav
let mapTemp
let can;
let api = "https://api.openweathermap.org/data/2.5/weather?q=";
let apikey = "&APPID=8cb78fc2fbb2a50e56084de4da5de7f2";
let units = "&units=metric";


let mapsApi = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

let mapsApiKey = "&key=AIzaSyCm1so2fwqc49tgT-2lqhvxW4jk1fJ39-k";



function setup() {
	can = createCanvas(1280, 720);
  let w = (windowWidth - width) / 2;
  let h = (windowHeight - height) / 2;

  can.position(w, h);


	let button = select('#submit');
	button.mousePressed(askWehter);
	input = select('#city')
}

function askWehter() {
	let url = api + input.value() + apikey + units;
	loadJSON(url, gotWeatherData);
}


function gotWeatherData(data) {
	weather = data;
	askMaps();
}

function askMaps() {
	let url = mapsApi + weather.coord.lat + "," + weather.coord.lon + mapsApiKey;
	loadJSON(url, gotMapsData);
}

function gotMapsData(data) {
	mapsData = data;
}


function draw() {
	background(0,3);
	textSize(25);


	if (weather) {
		let temp = weather.main.temp;
		let humidity = weather.main.humidity;

		fill(43, 188, 62);
		ellipse(800, height*1/2, (temp + 30), (temp + 30));
		text("Temperature", 750, 300)
		text(temp + '°C', 770, 440)
		fill(244, 66, 194);
		ellipse(300, height*1/2, humidity, humidity);
		text("Humidity", 260, 300)
		text(humidity + "%", 280, 440)




	}

}
