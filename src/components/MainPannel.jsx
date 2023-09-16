import "./MainPannel.css";
import { WiDayHaze } from "react-icons/wi";
import Searchbar from "./Searchbar";

const MainPannel = ({ weather, handleLocationChange }) => {
  return (
    <div className="main__container">
      <Searchbar handleLocationChange={handleLocationChange} />
      <WiDayHaze className="svg__currWeather" />
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
