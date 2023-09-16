import { BsSearch } from "react-icons/bs";
import "./Searchbar.css";
import { useState } from "react";

const Searchbar = ({ handleLocationChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    console.log(value)
    handleLocationChange(value);
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        className="search__input"
        onChange={handleChange}
        onKeyDown={(e) => (e.key == "Enter" ? handleSubmit() : null)}
      />
      <BsSearch className="search__icon" onClick={handleSubmit} />
    </div>
  );
};

export default Searchbar;
