function setSearchResult(weatherApiData) {
  if (!weatherApiData) return;

  const searchResult = document.getElementById("searchResult");
  searchResult.classList.add("active");

  const location = document.getElementById("location");
  const weatherCondition = document.getElementById("weatherCondition");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const windSpeed = document.getElementById("windSpeed");
  const humidity = document.getElementById("humidity");
  const weatherIcon = document.getElementById("weatherIcon");

  location.textContent = `${weatherApiData.cityName}, ${weatherApiData.country}`;
  weatherCondition.textContent = `${weatherApiData.weatherCondition}`;
  temperature.textContent = `${weatherApiData.celsiusTemperature} °C`;
  feelsLike.textContent = `Feels like: ${weatherApiData.feelsLikeInCelsius} °C`;
  windSpeed.textContent = `Wind: ${weatherApiData.windKph} Km/h`;
  humidity.textContent = `Humidity: ${weatherApiData.humidity}%`;
  weatherIcon.src = `${weatherApiData.weatherIcon}`;
}

export { setSearchResult };
