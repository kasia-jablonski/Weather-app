/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather() {
    var zipCode = document.getElementById("zip").value;
    if (zipCode === '') {
        zipCode = "77023";
    }
    var conditionsPath="http://api.apixu.com/v1/current.json?key=18b9dc9a761246b3b7123735193003&q=" + zipCode;
    var forecastPath="http://api.apixu.com/v1/forecast.json?key=18b9dc9a761246b3b7123735193003&q=" + zipCode + "&days=7";
    weatherConditions.open('GET', conditionsPath, true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);

    weatherForecast.open('GET', forecastPath, true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

    
}

// GET THE CONDITIONS


weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.location.name + ", " + cObj.location.region;
        document.getElementById('weather').innerHTML = cObj.current.condition.text;
        document.getElementById('temperature').innerHTML = cObj.current.temp_c + "°C";

    } //end if
}; //end function
loadWeather()










// GET THE FORECARST


weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
    document.getElementById('desc').innerHTML = fObj.forecast.forecastday[0].day.condition.text;
    //Day 1
    document.getElementById('r1c1').innerHTML = fObj.forecast.forecastday[1].date;
    document.getElementById('r1c2').src = fObj.forecast.forecastday[1].day.condition.icon;
    document.getElementById('r1c3').innerHTML = fObj.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.getElementById('r1c4').innerHTML = fObj.forecast.forecastday[1].day.mintemp_c + "°C";
    //Day 1
    document.getElementById('r2c1').innerHTML = fObj.forecast.forecastday[2].date;
    document.getElementById('r2c2').src = fObj.forecast.forecastday[2].day.condition.icon;
    document.getElementById('r2c3').innerHTML = fObj.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.getElementById('r2c4').innerHTML = fObj.forecast.forecastday[2].day.mintemp_c + "°C";
    //Day 3
    document.getElementById('r3c1').innerHTML = fObj.forecast.forecastday[3].date;
    document.getElementById('r3c2').src = fObj.forecast.forecastday[3].day.condition.icon;
    document.getElementById('r3c3').innerHTML = fObj.forecast.forecastday[3].day.maxtemp_c + "°C";
    document.getElementById('r3c4').innerHTML = fObj.forecast.forecastday[3].day.mintemp_c + "°C";

} //end if
}; //end function


