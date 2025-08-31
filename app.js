// Weather App using OpenWeatherMap API
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("cityName").innerText = ${data.name}, ${data.sys.country};
    document.getElementById("temp").innerText = 🌡 Temperature: ${data.main.temp} °C;
    document.getElementById("humidity").innerText = 💧 Humidity: ${data.main.humidity}%;
    document.getElementById("wind").innerText = 🌬 Wind: ${data.wind.speed} m/s;
    document.getElementById("condition").innerText = ⛅ Condition: ${data.weather[0].description};
  } catch (error) {
    alert(error.message);
  }
}
