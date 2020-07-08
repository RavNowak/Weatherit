import React, { useRef, useEffect } from "react";
import { WeatherChart } from "../../Common/WeatherChart";
import styles from "./ForecastWeatherComponent.module.scss";

const ForecastWeatherComponent = ({ weather }) => {
  const tempButtonRef = useRef(null);
  const canvasRef = useRef(null);

  let chart = new WeatherChart(canvasRef);

  useEffect(() => {
    tempButtonRef.current.focus();

    chart.drawTemperatureChart(weather);
  }, [weather]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button
          className={styles.tempButton}
          ref={tempButtonRef}
          onClick={() => {
            chart.drawTemperatureChart(weather);
          }}
        >
          Temperature
        </button>
        <button
          className={styles.humidityButton}
          onClick={() => {
            chart.drawHumidityChart(weather);
          }}
        >
          Humidity
        </button>
        <button
          className={styles.windButton}
          onClick={() => {
            chart.drawWindChart(weather);
          }}
        >
          Wind
        </button>
      </div>
      <canvas className={styles.chart} ref={canvasRef}></canvas>
    </div>
  );
};

export default ForecastWeatherComponent;
