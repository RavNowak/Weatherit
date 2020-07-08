import React, { useEffect, useState } from "react";
import WeatherService from "../../Services/weatherService";
import TitleBarComponent from "../TitleBarComponent/TitleBarComponent";
import WeatherInfoComponent from "../WeatherInfoComponent/WeatherInfoComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { getCoordinates } from "../../Common/utilities";
import styles from "./MainWeatherComponent.module.scss";

const MainWeatherComponent = () => {
  let [currentWeather, setCurrentWeather] = useState(null);
  let [forecastingWeather, setForecastingWeather] = useState(null);

  const handleCityChange = async (city) => {
    const weather = await WeatherService.getCurrentWeatherByCity(city);
    const forecast = await WeatherService.getForecastWeatherByCity(city);

    setCurrentWeather(weather);
    setForecastingWeather(forecast);
  };

  useEffect(() => {
    (async () => {
      const coords = await getCoordinates();
      const forecast = await WeatherService.getForecastWeatherByCoordinates(
        coords.latitude,
        coords.longitude
      );
      const weather = await WeatherService.getCurrentWeatherByCoordinates(
        coords.latitude,
        coords.longitude
      );

      setCurrentWeather(weather);
      setForecastingWeather(forecast);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <TitleBarComponent></TitleBarComponent>
      </div>
      <div className={styles.weatherContainer}>
        {currentWeather && forecastingWeather ? (
          <WeatherInfoComponent
            weather={currentWeather}
            forecast={forecastingWeather}
            handleCityChange={handleCityChange}
          ></WeatherInfoComponent>
        ) : (
          <LoadingComponent></LoadingComponent>
        )}
      </div>
      <div className={styles.footerContainer}>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
};

export default MainWeatherComponent;
