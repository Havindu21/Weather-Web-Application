// document.addEventListener("DOMContentLoaded", function () {

//     });

getLocation();


document.addEventListener("DOMContentLoaded", function () {
    let location = document.getElementById("searchTxt");
    let btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {

        searchLocation(location.value);
    });
    let mainWeatherLocation = document.getElementById("main-weather-location");
    let mainWeatherTemp = document.getElementById("main-weather-temp");
    let mainWeatherIcon = document.getElementById("main-weather-icon");
    let mainWeatherTitle = document.getElementById("main-weather-title");
    let mainWeatherPrecipitation = document.getElementById("main-weather-precipitation");
    let mainWeatherHumidity = document.getElementById("main-weather-humidity");
    let mainWeatherWind = document.getElementById("main-weather-wind");

    let day1Temp = document.getElementById("day1-temp");
    let day2Temp = document.getElementById("day2-temp");
    let day3Temp = document.getElementById("day3-temp");
    let day4Temp = document.getElementById("day4-temp");
    let day5Temp = document.getElementById("day5-temp");
    let day6Temp = document.getElementById("day6-temp");

    let hourlyWeatherImg = document.getElementById("hourly-weather-img");




    let searchInput = document.getElementById("searchTxt");
    function btnSearchOnEnter(event) {
        if (event.key === "Enter") {
            searchLocation(location.value);
        }
    }

    searchInput.addEventListener("keyup", btnSearchOnEnter);
    function searchLocation(location) {


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

        document.addEventListener("DOMContentLoaded", function () {
            // Your code here, including the AJAX requests and event listeners

            // Example:
            hourlyWeatherImg = document.getElementById("hourly-weather-img");

            // Rest of your code...
            $.ajax({
                method: "GET",
                url: `https://api.weatherapi.com/v1/forecast.json?key=ae9aefbe24a04460aaf165345230110&q=${location}`,
                success: (data) => {
                    console.log(data);
                    hourlyWeatherImg.src = data.forecast.forecastday[0].hour[0].condition.icon;
                    // console.log(data.forecast.forecastday[0].hour[0].condition.icon);

                    // hourlyWeatherImg.src = data.forecast.forecastday.icon[0].hour[0];
                    // const hourlyForecast = data.forecast.forecastday[0].hour; // Extract hourly forecast data

                    // Accessing the icon for the first hour
                    // const iconUrl = hourlyForecast[0].condition.icon;

                    // You can set the icon URL to an HTML element (e.g., an image) using the src attribute
                    // hourlyWeatherImg.src = `https:${iconUrl}`;
                }
            });
        });

        var currenDate = new Date();

        // Subtract 7 days (7 * 24 * 60 * 60 * 1000 milliseconds) from the current date
        var sevenDaysAgo = new Date(currenDate.getTime() - 7 * 24 * 60 * 60 * 1000);

        // Extract the year, month, and day components from the sevenDaysAgo date
        var year = sevenDaysAgo.getFullYear();
        var month = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it is zero-based
        var day = String(sevenDaysAgo.getDate()).padStart(2, '0');

        // Create the "yyyy-mm-dd" formatted string
        var formattedDate = year + '-' + month + '-' + day;
        console.log(formattedDate);

        $.ajax({
            method: "GET",
            url: `https://api.weatherapi.com/v1/history.json?&dt=${formattedDate}&end_dt=${currenDate}&key=89cc63fe3a254352b8d132020231609&q=${location}`,
            success: (data) => {
                day1Temp.innerHTML = data.forecast.forecastday[6].day.avgtemp_c ;
                day2Temp.innerHTML = data.forecast.forecastday[5].day.avgtemp_c ;
                day3Temp.innerHTML = data.forecast.forecastday[4].day.avgtemp_c ;
                day4Temp.innerHTML = data.forecast.forecastday[3].day.avgtemp_c ;
                day5Temp.innerHTML = data.forecast.forecastday[2].day.avgtemp_c ;
                day6Temp.innerHTML = data.forecast.forecastday[1].day.avgtemp_c ;
            }
        });

        // const historyUrl = `https://api.weatherapi.com/v1/history.json?&dt=${formattedDate}&end_dt=${formattedDateToday}&key=89cc63fe3a254352b8d132020231609&q=${location}`;
    }

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

    document.addEventListener("DOMContentLoaded", function () {
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


    // btnDarkImage.addEventListener("click", () => {
    //     if (mode % 2 == 0) {
    //         document.body.style.backgroundColor = "#FFFFFF"

    //         console.log(mode);

    //         mode++;

    //     } else {
    //     document.body.style.background = "linear-gradient(180deg, #19142D, #3c096c)";

    //         console.log(mode);

    //         mode++;
    //     }
    // })

    btnDarkImage.addEventListener("click", () => {
        if (mode % 2 == 0) {
            document.body.style.background = "linear-gradient(180deg, #ECE4D1, #ECE4D1)";
            console.log(mode);
            mode++;
        } else {
            document.body.style.background = "linear-gradient(180deg, #19142D, #3c096c)";
            console.log(mode);
            mode++;
        }
    })
    

})

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
      let lon = position.coords.longitude;
       let lat = position.coords.latitude;
       console.log(lon,lat);
       searchLocation(lat+","+lon);
  }
