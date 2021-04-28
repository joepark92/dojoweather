function closeCookie() {
    var z = document.querySelector("#cookies")
    z.style.display = "none";
    console.log("working")
}

var cHigh = ["23.9°", "26.7°", "20.6°", "25.6°"];
var cLow = ["18.3°", "18.9°", "16.1°", "21.1°"]
var fHigh = ["75°", "80°", "69°", "78°"];
var fLow = ["65°", "66°", "61°", "70°"];

var high = document.querySelectorAll(".temphigh");
var low = document.querySelectorAll(".templow");

function temperatureChange(element) {
    if (element.value == "C") {
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = cHigh[i];
        }
        for(var x = 0; x < low.length; x++) {
            low[x].innerText = cLow[x];
        }
    }
    if (element.value == "F") {
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = fHigh[i];
        }
        for(var x = 0; x < low.length; x++) {
            low[x].innerText = fLow[x];
        }
    }
    
}