import React from "react";
import BasicWeatherComponent from "../BasicWeatherComponent/BasicWeatherComponent";
import ForecastWeatherComponent from "../ForecastWeatherComponent/ForecastWeatherComponent";
import styles from "./WeatherInfoComponent.module.scss";

const WeatherInfoComponent = ({ weather, forecast, handleCityChange }) => {
  return (
    <div className={styles.container}>
      <BasicWeatherComponent
        weather={weather}
        handleCityChange={handleCityChange}
      ></BasicWeatherComponent>
      <ForecastWeatherComponent
        weather={forecast}
      ></ForecastWeatherComponent>
    </div>
  );
};

export default WeatherInfoComponent;
