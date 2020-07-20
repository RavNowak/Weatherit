import React from "react";
import BasicWeatherComponent from "../BasicWeatherComponent/BasicWeatherComponent";
import ForecastWeatherComponent from "../ForecastWeatherComponent/ForecastWeatherComponent";
import styles from "./WeatherInfoComponent.module.scss";

const WeatherInfoComponent = ({
  weather,
  forecast,
  handleCityChange,
  invalidCity,
  clearCityError,
}) => {
  return (
    <div className={styles.container}>
      <BasicWeatherComponent
        invalidCity={invalidCity}
        weather={weather}
        handleCityChange={handleCityChange}
        clearCityError={clearCityError}
      ></BasicWeatherComponent>
      <ForecastWeatherComponent weather={forecast}></ForecastWeatherComponent>
    </div>
  );
};

export default WeatherInfoComponent;
