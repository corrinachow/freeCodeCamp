var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;

$( document ).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
      $("#tempUnit").text(lat);
    });
  } else {
    console.log("Geolocation not available.")
  }

})
