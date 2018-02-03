var api = "https://fcc-weather-api.glitch.me/api/current?";

$( document ).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation not available.")
  }
});




function getWeather(lat, lon) {
  var urlAPI = api + lat + "&" + lon;
  $.ajax({
    url: urlAPI, success: function (data) {
      $("#weather-icon").html("<img src='" + data.weather[0].icon+"'/>") //temp lol use http://erikflowers.github.io/weather-icons/
      $("#location").text(data.name + ", " + data.sys.country);
      $("#temperature").text(data.main.temp);
    }
  });
}

//var fullDate = new Date() //Sat Feb 03 2018 00:27:08 GMT-0500 (EST)
