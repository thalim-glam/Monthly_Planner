// HW6 api = b5b9d37f78c385c862bf221f6302bf82
const apiKey = "df3fb9934a7d8ebae97c6749b588071a"
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}";
const searchInput = document.querySelector("#searchInput")
const todaysWeather = document.querySelector("#weather")


async function searchWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
      document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + " %";
      document.querySelector(".wind").innerHTML = Math.ceil(data.wind.speed) + " km/h";
      /*

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      // fetch to this next end point https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
          return response.json()
        }).then(function (data5) {
          console.log(data5)
          const todayData5 = `
          <div>
          <h2>${data5.city.name}</h2>
          <p>Temp: ${data5.main.temp}</p>
          <p>Humidity: ${data5.main.humidity}</p>
          <p>Wind speed: ${data5.wind.speed}</p>
          </div>
          `
            todaysWeather.innerHTML = todayData5;


        })
        */

        })
    }


const searchButton = document.querySelector("#searchBtn")
  searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    const cityName = searchInput.value.trim()
    searchWeather(cityName)
  })