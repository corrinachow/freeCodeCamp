var api = "https://fcc-weather-api.glitch.me/api/current?";
var tempC;
var colours;
var iconId;
var weatherIcons = {
  '804' : ['wi-day-sunny', '#ffff33', '#000000'],
  '802' : ['wi-day-sunny', '#ffff33', '#000000']
}

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation not available.")
  }

  $("#tempUnit").click(function() {
    var currentUnit = $("#tempUnit").text();
    var newUnit = currentUnit === "C" ? "F" : "C";
    $("#tempUnit").text(newUnit);
    if (newUnit === "F") {
      var tempF = Math.round(parseInt(tempC) * (9 / 5) + 32);
      $("#temperature").text(tempF);
    } else {
      $("#temperature").text(tempC);
    }
  });
})

function getWeather(lat, lon) {
  var urlAPI = api + lat + "&" + lon;
  $.ajax({
      url: urlAPI,
      success: function(data) {
        $("#weather-icon").html("<img src='" + data.weather[0].icon + "'/>") //temp lol use http://erikflowers.github.io/weather-icons/
        $("#location").text(data.name + ", " + data.sys.country);
        tempC = Math.round(data.main.temp);
        $("#temperature").text(tempC);
        $("#weather").text(data.weather[0].description);
        iconId = data.weather[0].id;
        colours = weatherIcons[iconId];
        console.log(weatherIcons[iconId]);
        console.log(iconId);
        console.log(/^[018]/g.test(iconId));
        changeColours(iconId);
      }
    });
}

function changeColours(id) {
  switch (true) {
    case /^[018]/g.test(iconId):
      $("body").css("background-color",colours[1])
      break;
    }
  }