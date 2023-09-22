import { BsSearch } from "react-icons/bs";
import "./Searchbar.css";
import { useState } from "react";
import Autocomplete from "./Autocomplete";

const Searchbar = ({ handleLocationChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    handleLocationChange(value);
    setValue("");
  };

  return (
    <>
      <div className="search__bar">
        <input
          type="text"
          placeholder="Search for your city..."
          className="search__input"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => (e.key == "Enter" ? handleSubmit() : null)}
        />
        <BsSearch className="search__icon" onClick={handleSubmit} />
      </div>
      {value && <Autocomplete searchValue={value} setValue={setValue} handleLocationChange={handleLocationChange}/>}
    </>
  );
};

export default Searchbar;
