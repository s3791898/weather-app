function setSearchResult(weatherData) {
  // If weatherApiData is falsy then return out of the function
  if (!weatherData) return;

  const searchResult = document.getElementById("searchResult");
  searchResult.classList.add("active");

  // Storing a reference to the HTML elements in a variable
  const location = document.getElementById("location");
  const weatherCondition = document.getElementById("weatherCondition");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const windSpeed = document.getElementById("windSpeed");
  const humidity = document.getElementById("humidity");
  const weatherIcon = document.getElementById("weatherIcon");

  // Adding the textContent for the HTML elements with the data retrieved from the weatherApiData call
  location.textContent = `${weatherData.cityName}, ${weatherData.country}`;
  weatherCondition.textContent = `${weatherData.weatherCondition}`;
  temperature.textContent = `${weatherData.celsiusTemperature} °C`;
  feelsLike.textContent = `Feels like: ${weatherData.feelsLikeInCelsius} °C`;
  windSpeed.textContent = `Wind: ${weatherData.windKph} Km/h`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  weatherIcon.src = `${weatherData.weatherIcon}`;
}

export { setSearchResult };
