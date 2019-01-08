var link = "http://api.openweathermap.org/data/2.5/weather?q=";
var link2 = "&units=metric";
var link3 = "&appid=56f01634e24fe8563c9d47f15983c80f";
var loc = link.concat(city,link2,city,link3);
// These variables allow me to combine strings, and add different location data to the API's URL

function loadLocation() { // Loads London JSON data
    var city = textbox.value();
    var loc = link.concat(city,link2,city,link3); //combines strings
    loadJSON(loc,weatherLoaded);
}

function keyPressed() { // This function restarts, and loads new location data when the user presses enter.
    if(keyCode == ENTER) {
       loadLocation(); // Loads location data for search term
       drips.splice(0,1000); // Removes previous drips from the array
       setTimeout(resetSketch,timeout); // Restarts sketch
    }
}

function textBox(){ // Creates and styles the textbox
    textbox = createInput();
    textbox.changed(loadLocation);
    textbox.position(50,height*0.25)
    textbox.style('font-size', '40px');
    textbox.style('background', 'transparent');
    textbox.style('border', '0px');
    textbox.style('outline', '0');
    textbox.style('font-family', 'Montserrat, sans-serif');
    textbox.style('color', '#969696');


}
