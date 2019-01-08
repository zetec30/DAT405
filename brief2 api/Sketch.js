
var weather;

var apiKey ='9ec15db71e13bdd315ff6d0f5a18ac80';



function preload() {
let url = "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22";

getTopArtists = loadJSON(url);
}

function setup() {

//CANVAS, ADDED A VARIABLE INCASE I WANTED TO CHANGE THE CANVAS PROPERTIES
can = createCanvas(1280, 720);
background(0);
//VARIABLES SETS THE CANVAS DEAD CENTER
let w = (windowWidth - width) / 2;
let h = (windowHeight - height) / 2;

//ABOVE VARIABLES USED FROM ABOVE
can.position(w, h);

//STYLE TO ADD A 5PX BORDER AROUND THE CANVAS
can.style("border:5px solid grey");
// console.log(getTopArtists);
console.log(getTopArtists.topartists.artist[0].name);
}
