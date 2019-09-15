// function dataWeather(data) {
//     let kelvinDelta = 273.15;
//     var calcCelcius = Math.round(parseFloat(data.main.temp) - kelvinDelta);

//     var weather = new Weather (data.weather[0].main, calcCelcius, data.name, data.windata.speed);

//     var main = weather.main;
//     var temp = weather.celcius;
//     var wind = weather.wind;
//     var location = weather.location;

//     document.getElementById('main').innerHTML = main;
//     document.getElementById('temp').innerHTML = celcius;
//     document.getElementById('location').innerHTML = location;
//     document.getElementById('wind').innerHTML = wind;
// }

// module.exports = dataWeather;
