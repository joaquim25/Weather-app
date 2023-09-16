import "./App.css";
import MainPannel from "./components/MainPannel";
import DetailsPannel from "./components/DetailsPannel";
import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import { useState, useEffect } from "react";

//
function getTime(time) {
  const reqDate = new Date(time * 1000);
  const hour = reqDate.getHours();
  const minute = reqDate.getMinutes();

  return `${hour}h:${minute}m`;
}
// Function to convert the date for the correct timezone
function locationDate(timezone) {
  const now = Date.now();
  const converted = now;
  const current = new Date(converted + timezone * 1000);

  // Destructure to hold the specific details
  const [day, date, month, year, time, ,] = current.toUTCString().split(" ");
  return { day, date, month, year, time };
}

// fetch the openweather API and destructer the retrieved object
async function fetchWeather(location, setWeather) {
  const weather = await new AsyncWeather();
  const apiKey = "af6b2fe2411dac447284ae2d8fc40027";
  console.log(weather.setCity(""))
  weather.setLang("en");
  weather.setCity(location);
  weather.setUnits("metric");
  weather.setApiKey(apiKey);


  try {
    const currWeather = await weather.getAllWeather();
    console.log(currWeather);
    setWeather({
      location: currWeather.name,
      temperature: currWeather.main.temp.toFixed(1),
      description: currWeather.weather[0].main,
      time: locationDate(currWeather.timezone),
      details: {
        wind: {
          title: "Wind",
          main: currWeather.wind.speed + " km/h",
          sec: currWeather.wind.deg + "º",
        },
        humidity: {
          title: "Humidity",
          main: currWeather.main.humidity + "%",
        },
        feels_like: {
          title: "Real feel",
          main: currWeather.main.feels_like.toFixed(1) + " ºC",
        },
        pressure: {
          title: "Pressure",
          main: currWeather.main.pressure + " mb",
          sec:
            currWeather.main.pressure > 1020
              ? "High"
              : currWeather.main.pressure < 1000
              ? "Low"
              : "Normal",
        },
        visibility: {
          title: "Visibility",
          main: currWeather.visibility / 1000 + " km",
        },
        description: {
          title: "Description",
          sec:
            currWeather.weather[0].description.charAt(0).toUpperCase() +
            currWeather.weather[0].description.slice(1),
        },
        temperature: {
          title: "Temperature History",
          sec: currWeather.main.temp_max.toFixed(1) + " max",
          sec1: currWeather.main.temp_min.toFixed(1) + " min",
        },
        sun: {
          title: "Sun",
          sec: `Rise: ${getTime(currWeather.sys.sunrise)}`,
          sec1: `Set: ${getTime(currWeather.sys.sunset)}`,
        },
        end: {
          main: "Weather in:",
          sec: `${currWeather.name}, ${currWeather.sys.country}`
        }
      },
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// API MAPS:  AIzaSyAo8jUK2y2L0-k6bLNhSY4l0oRH93nowYc

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchWeather("Lisbon", setWeather);
  }, []);

  const handleLocationChange = (newLocation) => {
    fetchWeather(newLocation, setWeather);
  };

  return (
    <div className="app__container">
      <MainPannel
        weather={weather}
        handleLocationChange={handleLocationChange}
      />
      <DetailsPannel details={weather.details} />
    </div>
  );
}

export default App;
