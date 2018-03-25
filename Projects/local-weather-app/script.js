var smoothAnimation;
var api = "https://fcc-weather-api.glitch.me/api/current?";
var tempC;
var iconId;
var colours;
//category: [icon, body colour, weather-info colour]
var weatherIcons = {
  'clearday' : ['wi-day-sunny', '#ffee99', '#fffcb7'],
  'clearnight' : ['wi-night-clear', '#514663', '#ddd5e8'],
  200 : ['wi-thunderstorm', '#726da8', '#a0d2db'], //thunderstorm
  300 : ['wi-showers', '#5a93c7', '#afcce1'], //drizzle
  500 : ['wi-rain', '#93a4b0', '#8299a0'], //rain
  600 : ['wi-snow', '#d2eaf9', '#effaff'], //snow
  701 : ['wi-dust', '#d48381', '#e7c6ae'], //atmosphere
  801 : ['wi-cloud', '#d0e2ed', '#dee8ef'], //clouds
  900 : ['wi-tornado', '#8993a2', ' #bddac8'], //tornado
  901 : ['wi-hurricane', '#5f8c96', '#83b7c7'], //hurricane storm
  903 : ['wi-snowflake-cold', '#b2cef5', '#d2cef5'], //extreme cold
  904 : ['wi-hot', '#f66f6f', '#ffc96d'], //extreme hot
  906 : ['wi-hail', '#9adbcf', '#b9dfde '], //hail
  951 : ['wi-strong-wind', '#a9e6cb', ' #aae7e8'] //breeze
}

//initialises ajax when button is clicked
$("#retrieveWeather").click(function() {
  document.getElementById("retrieveWeather").style.display = "none";
  $("#loader").fadeIn(500);
  document.getElementById("loader").style.display = "block";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation not available.")
  }

function getWeather(lat, lon) {
  let urlAPI = api + lat + "&" + lon;
  let date = Date().split(" ");
  $.ajax({
      url: urlAPI,
      success: function(data) {
        $("#location").text(data.name + ", " + data.sys.country);
        tempC = Math.round(data.main.temp);
        $("#temperature").text(tempC);
        $("#weather").text(data.weather[0].description);
        $("#date").text(date[0] + " | " + date[1] + " " + date[2] + " | " + date[3])
        iconId = data.weather[0].id;
        if (/01d/.test(data.weather[0].icon)) {
          $("#weather-icon").removeClass().addClass("wi " + weatherIcons.clearday[0]);
          $("body").css("background-color", weatherIcons.clearday[1]);
          $(".weather-info").css("background-color", weatherIcons.clearday[2]);
          smoothAnimation = setTimeout(showPage);
        } else if (/01n/.test(data.weather[0].icon)) {
          $("#weather-icon").removeClass().addClass("wi " + weatherIcons.clearnight[0]);
          $("body").css("background-color", weatherIcons.clearnight[1]);
          $(".weather-info").css("background-color", weatherIcons.clearnight[2]);
          smoothAnimation = setTimeout(showPage);
        } else {
        changeColours(iconId);
        smoothAnimation = setTimeout(showPage);
      }
      }
    });
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("weatherBox").style.display = "block";
}

  $("#tempReading").click(function() {
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
  } /*else if  (id === 800) {
    colours = weatherIcons[Math.floor(id/800)*800];
    $("#weather-icon").removeClass().addClass("wi " + colours[0]);
    $("body").css("background-color", colours[1]);
    $(".weather-info").css("background-color", colours[2]);
  } */ else if (id >=801 && id<=804) {
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

