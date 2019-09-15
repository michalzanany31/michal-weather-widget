// init function
window.onload = function () {
    var key = window.location.href;
    document.getElementById("widget").style.display = "none";
    document.getElementById("error").style.display = "none";
    getKey(key);
}

// import Weather from './weatherModel.js'
// Build the weather class that will contain the the class parameters
class Weather {
    constructor(main, temp, location, wind) {
        this.main = main;
        this.temp = temp;
        this.location = location;
        this.wind = wind
    }
}


// import getWeather './handler.js'
// This fanction will fetch the data from the API and handle any errors
function getWeather(key, city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.getElementById("loader").style.display = "none";
            if (data.cod === 401 || data.cod === '404') {
                document.getElementById("error").style.display = "block";
                console.log(data.message)
            } else {
                document.getElementById("widget").style.display = "block";
                dataWeather(data);
                console.log(data);
            }
        })
        .catch(function () {
            console.log('Error in fetching data')
        });
}


// import getKey from './utils.js'
// This function will get the url, handle the query params and transfer them to the "getWeather" function
function getKey(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    getWeather(params.apiKey, params.city)
    return params;
    console.log(params);
};



// import dataWeather from './renderer.js'
// This function will handle/process the data received from the API
function dataWeather(data) {
    let kelvinDelta = 273.15;
    var calcCelcius = Math.round(parseFloat(data.main.temp) - kelvinDelta);

    let weather = new Weather();
    weather.main = data.weather[0].main;
    weather.temp = calcCelcius;
    weather.wind = data.wind.speed;
    weather.location = data.name;
    document.getElementById('main').innerHTML = weather.main;
    document.getElementById('temp').innerHTML = weather.temp;
    document.getElementById('location').innerHTML = weather.location;
    document.getElementById('wind').innerHTML = weather.wind;
}
