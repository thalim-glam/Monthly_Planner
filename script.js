// HW6 api = b5b9d37f78c385c862bf221f6302bf82
const apiKey = "df3fb9934a7d8ebae97c6749b588071a"
const searchInput = document.querySelector("#searchInput")
const todaysWeather = document.querySelector("#weather")


function searchWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      const todayData = `
  <div>
  <h2>${data.name}</h2>
  <p>Temp: ${data.main.temp}</p>
  <p>Humidity: ${data.main.humidity}</p>
  <p>Wind speed: ${data.wind.speed}</p>
  </div>
  `
      todaysWeather.innerHTML = todayData
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      // fetch to this next end point https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}
/*
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
      .then(function (response) {
        return response.json()
      }).then(function (data5) {
        console.log(data5)
        const todayData5 = `
    <div>
    <h2>${data5.name}</h2>
    <p>Temp: ${data5.main.temp}</p>
    <p>Humidity: ${data5.main.humidity}</p>
    <p>Wind speed: ${data5.wind.speed}</p>
    </div>
    `
      todaysWeather.innerHTML = todayData5

      add a for loop -----------------------------------------------------------------------------------
    */
    })
}


const searchButton = document.querySelector("#searchBtn")
searchButton.addEventListener("click", function (event) {
  event.preventDefault()
  const cityName = searchInput.value.trim()
  searchWeather(cityName)
})