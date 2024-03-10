function convertData(data) {
  const {
    location: { name: cityName, country },
    current: {
      temp_c: celsiusTemperature,
      temp_f: fahrenheitTemperature,
      condition: { text: weatherCondition, icon: weatherIcon },
      wind_kph: windKph,
      feelslike_c: feelsLikeInCelsius,
      feelslike_f: feelsLikeInFahrenheit,
      humidity,
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
  const endpoint = `https://api.weatherapi.com/v1/current.json?key=b2b5b1a3006540f1b21234921240903&q=${city}&aqi=no`;
  try {
    const response = await fetch(endpoint, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`City ${city} not found`);
    }
    const data = convertData(await response.json());
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}

export { getData };
