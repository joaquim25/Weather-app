import React, { useState, useEffect } from "react";
import "./Autocomplete.css";

const Autocomplete = ({ searchValue, setValue, handleLocationChange }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const filterCities = async () => {
      setIsSearching(true);
      try {
        const response = await fetch("src/assets/locations.json");
        const cityData = await response.json();
        const cityList = Object.keys(cityData);

        const filtered = cityList.filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCities(filtered);
      } catch (error) {
        console.error("Error loading city data:", error);
      } finally {
        setIsSearching(false);
      }
    };

    if (searchValue.length > 1) {
      filterCities();
    } else {
      setFilteredCities([]);
    }
  }, [searchValue]);

  const handleLocationClick = (e) => {
    const newLocation = e.target.innerText;
    handleLocationChange(newLocation);
    setValue("");
  };

  return (
    <>
      {searchValue.length > 1 && (
        <div className="autocomplete__container">
          {isSearching && (
            <p className="autocomplete__searching">Searching...</p>
          )}
          <ul>
            {filteredCities.map((city) => (
              <li key={city} value={city} onClick={handleLocationClick}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Autocomplete;
