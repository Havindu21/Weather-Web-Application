document.addEventListener("DOMContentLoaded", function () {
    let btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {
        let location = $("#searchTxt").val();
        searchLocation(location);
    });

    function searchLocation(location) {
        let mainWeatherLocation = document.getElementById("main-weather-location");
        let mainWeatherTemp = document.getElementById("main-weather-temp");
        let mainWeatherIcon = document.getElementById("main-weather-icon");
        let mainWeatherTitle = document.getElementById("main-weather-title");
        let mainWeatherPrecipitation = document.getElementById("main-weather-precipitation");
        let mainWeatherHumidity = document.getElementById("main-weather-humidity");
        let mainWeatherWind = document.getElementById("main-weather-wind");

        $.ajax({
            method: "GET",
            url: `https://api.weatherapi.com/v1/current.json?key=ae9aefbe24a04460aaf165345230110&q=${location}`,
            success: (data) => {
                mainWeatherLocation.innerHTML = data.location.name;
                mainWeatherTemp.innerHTML = data.current.temp_c + "°C";
                mainWeatherIcon.src = data.current.condition.icon;
                mainWeatherTitle.innerHTML = data.current.condition.text;
                mainWeatherPrecipitation.innerHTML = "Precipitation: " + data.current.precip_mm + "mm";
                mainWeatherHumidity.innerHTML = "Humidity: " + data.current.humidity + "%";
                mainWeatherWind.innerHTML = "Wind: " + data.current.wind_kph + " km/h";
            }
        });
    }
});

function refreshTime() {
    const timeDisplay = document.getElementById("live-time");
    const options = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const dateString = new Date().toLocaleTimeString('en-US', options);
    timeDisplay.textContent = dateString;
}

setInterval(refreshTime, 1000);

document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    let daySuffixes = ["st", "nd", "rd", "th"];
    let day = currentDate.getDate();
    let month = currentDate.toLocaleString("default", { month: "long" });
    let year = currentDate.getFullYear();
    let daySuffix = daySuffixes[(day >= 11 && day <= 13) ? 3 : (day % 10) - 1];
    let formattedDate = `${day}<sup>${daySuffix}</sup> ${month} ${year}`;
    document.getElementById("live-date").innerHTML = formattedDate;
});


let mode = 0;
let btnDarkImage = document.getElementById("btnDarkImage");


btnDarkImage.addEventListener("click",()=>{
  if(mode%2==0){
    document.body.style.backgroundColor = "#FFFFFF"

    console.log(mode);

    mode++;
    
  }else{
    document.body.style.background = "#000"
    console.log(mode);

    mode++;
  }
})

