function convertData(data) {
  // Destructuring data object
  console.log(data);
  const {
    location: { name: cityName, country }, // Renaming "name" to "cityName"
    current: {
      temp_c: celsiusTemperature, // Renamed "temp_c" to "celsiusTemperature"
      temp_f: fahrenheitTemperature, // Renamed "temp_f" to "fahrenheitTemperature"
      condition: { text: weatherCondition, icon: weatherIcon }, // Renamed "text" to "weatherCondition" and "icon" to "weatherIcon"
      wind_kph: windKph, // Renamed "wind_kph" to windKph
      feelslike_c: feelsLikeInCelsius, // Renamed "feelslike_c" to feelsLikeInCelsius
      feelslike_f: feelsLikeInFahrenheit, // Renamed "feelslike_f" to feelsLikeInFahrenHeit
      humidity, // No need to rename because humidity is the default key name received
    },
  } = data;
  return {
    cityName,
    country,
    celsiusTemperature,
    weatherCondition,
    weatherIcon,
    fahrenheitTemperature,
    windKph,
    feelsLikeInCelsius,
    feelsLikeInFahrenheit,
    humidity,
  };
}

async function getData(city) {
  // Weather API call URL
  const endpoint = `https://api.weatherapi.com/v1/current.json?key=b2b5b1a3006540f1b21234921240903&q=${city}&aqi=no`;
  try {
    const response = await fetch(endpoint, { mode: "cors" });
    // If the fetch was unsuccessful then throw an error
    if (!response.ok) {
      throw new Error(`City ${city} not found`);
    }
    const data = convertData(await response.json());
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}

export { getData };
