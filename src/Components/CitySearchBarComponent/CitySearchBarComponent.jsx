import React, { useRef } from "react";
import styles from "./CitySearchBarComponent.module.scss";

const CitySearchBarComponent = ({ handleCityChange }) => {
  const inputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = inputRef.current.value;

    if (city) {
      handleCityChange(city);
  
      inputRef.current.value = "";
      inputRef.current.blur();
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Change city"
        className={styles.searchInput}
        ref={inputRef}
      ></input>
      <button type="submit" className={styles.loupe}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default CitySearchBarComponent;
