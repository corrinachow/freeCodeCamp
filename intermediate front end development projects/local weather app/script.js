var smoothAnimation;
var api = "https://fcc-weather-api.glitch.me/api/current?";
var tempC;
var iconId;
var colours;
//category: [icon, body colour, weather-info colour]
var weatherIcons = {
  'clear-day' : ['wi-day-sunny', '#eee8cd', '#000000'],
  'clear-night' : ['wi-night-clear', '#ffff33', '#000000'],
  200 : ['wi-thunderstorm', '#ffff33', '#000000'], //thunderstorm
  300 : ['wi-showers', '#ffff33', '#000000'], //drizzle
  500 : ['wi-rain', '#ffff33', '#000000'], //rain
  600 : ['wi-snow', '#e2e6e2', '#f1f3ec'], //snow
  701 : ['wi-dust', '#ffff33', '#000000'], //atmosphere
  800 : ['wi-day-sunny', '#ffff33', '#000000'], //clear
  801 : ['wi-cloud', '#fffadc', '#bedcf5'], //clouds
  900 : ['wi-tornado', '#ffff33', '#000000'], //tornado
  901 : ['wi-hurricane', '#ffff33', '#000000'], //hurricane storm
  903 : ['wi-snowflake-cold', '#ffff33', '#000000'], //extreme cold
  904 : ['wi-hot', '#ffff33', '#000000'], //extreme hot
  906 : ['wi-hail', '#ffff33', '#000000'], //hail
  951 : ['wi-strong-wind', '#ffff33', '#000000'] //breeze
}

$(document).ready(function() {
  smoothAnimation = setTimeout(showPage, 6000);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation not available.")
  }

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("weatherBox").style.display = "block";
}

  $("#tempUnit").click(function() {
    $("#tempReading").fadeOut(0);
    $("#tempReading").fadeIn(500);
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
        $("#location").text(data.name + ", " + data.sys.country);
        tempC = Math.round(data.main.temp);
        $("#temperature").text(tempC);
        $("#weather").text(data.weather[0].description);
        iconId = data.weather[0].id;
        if (/01d/.test(iconId)) {
          $("#weather-icon").removeClass().addClass("wi " + weatherIcons.clear-day[0]);
          $("body").css("background-color", weatherIcons.clear-day[1]);
        } else if (/01n/.test(iconId)) {
          $("#weather-icon").removeClass().addClass("wi " + weatherIcons.clear-night[0]);
          $("body").css("background-color", weatherIcons.clear-night[1]);
        } else {
        changeColours(iconId);
      }
      }
    });
}


let changeColours = id => {
  if (id >=200 && id<=232) {
    colours = weatherIcons[Math.floor(id/200)*200];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=300 && id<=321) {
    colours = weatherIcons[Math.floor(id/300)*300];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=500 && id<=531) {
    colours = weatherIcons[Math.floor(id/500)*500];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=600 && id<=622) {
    colours = weatherIcons[Math.floor(id/600)*600];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=701 && id<=780) {
    colours = weatherIcons[Math.floor(id/701)*701];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if  (id === 800) {
    colours = weatherIcons[Math.floor(id/800)*800];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=801 && id<=804) {
    colours = weatherIcons[Math.floor(id/801)*801];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id === 900 || id === 781) { //tornado
    colours = weatherIcons[Math.floor(id/900)*900];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id === 901 || id === 902 || id === 962) { //hurricane
    colours = weatherIcons[Math.floor(id/901)*901];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id === 903) { //extreme cold
    colours = weatherIcons[Math.floor(id/903)*903];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id === 904) { //extreme hot
    colours = weatherIcons[Math.floor(id/904)*904];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id === 906) { //hail
    colours = weatherIcons[Math.floor(id/906)*906];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=951 && id<=959 || id === 905) { //breeze
    colours = weatherIcons[Math.floor(id/951)*951];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } else if (id >=960 && id<=962 || id === 901) {
    colours = weatherIcons[Math.floor(id/901)*901];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  }
};

