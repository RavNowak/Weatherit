import React, { useState, useEffect } from "react";
import moment from "moment";
import CitySearchBarComponent from "../CitySearchBarComponent/CitySearchBarComponent";
import styles from "./BasicWeatherComponent.module.scss";

const BasicWeatherComponent = ({ weather, handleCityChange }) => {
  let [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm a"));

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment().format("MMMM Do YYYY, h:mm a"));
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.container}>
      <div className={styles.cityBar}>
        <CitySearchBarComponent
          handleCityChange={handleCityChange}
        ></CitySearchBarComponent>
      </div>

      <div className={styles.basicInfos}>
        <p className={styles.city}>{weather.city}</p>
        <p>{time}</p>
        <p className={styles.description}>( {weather.description} )</p>
      </div>

      <div className={styles.mainWeather}>
        <div className={styles.weatherItem}>
          <i className="fas fa-thermometer-half"></i>
          <p>{weather.temp}°C</p>
        </div>

        <div className={styles.weatherItem}>
          <i className="fas fa-tint"></i>
          <p>{weather.humidity}%</p>
        </div>

        <div className={styles.weatherItem}>
          <i className="fas fa-compress-arrows-alt"></i>
          <p>{weather.pressure}hPa</p>
        </div>

        <div className={styles.weatherItem}>
          <i className="fas fa-wind"></i>
          <p>{weather.wind}km/h</p>
        </div>
      </div>
    </div>
  );
};

export default BasicWeatherComponent;
