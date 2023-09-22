import "./MainPannel.css";
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherDownpour, TiWeatherShower, TiWeatherStormy, TiWeatherSnow } from "react-icons/ti";
import {RiMistFill} from "react-icons/ri";
import Searchbar from "./Searchbar";

const icons ={
  "Clouds": <TiWeatherCloudy className='svg__currWeather' />,
  "Thunderstorm": <TiWeatherStormy className='svg__currWeather' />,
  "Drizzle": <TiWeatherShower className='svg__currWeather' />,
  "Rain" : <TiWeatherDownpour className='svg__currWeather' />,
  "Clear": <TiWeatherSunny className='svg__currWeather' />,
  "Snow": <TiWeatherSnow className='svg__currWeather' />,
  "Atmosphere": <RiMistFill className='svg__currWeather' />,
}

const MainPannel = ({ weather, handleLocationChange }) => {
  return (
    <div className="main__container">
      <Searchbar handleLocationChange={handleLocationChange} />
      {icons[weather.description]}
      <h2 className="main__temp">
        {weather.temperature}
        <span>º</span>C
      </h2>
      <p className="main__descr">{weather.description}</p>
      <hr />
      {!weather || !weather.time ? (
        <div>Loading...</div>
      ) : (
        <div className="main__details">
          <p className="main__details--sm">
            {weather.time.date}-{weather.time.month}-{weather.time.year}
          </p>
          <p>
            {weather.time.day} {weather.time.time}
          </p>
          <p>Day</p>
        </div>
      )}
      <h2 className="main__location">{weather.location}</h2>
    </div>
  );
};

export default MainPannel;
