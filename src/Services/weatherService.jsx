import { kelvineToCelsius, mperSectoKmperhour } from "../Common/utilities";

const axios = require("axios");
const KEY = "851cd9e44580a3395fc1e44872743d79";

class WeatherService {
  static getCurrentWeatherByCoordinates = (lat, lon) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
        );

        resolve({
          temp: kelvineToCelsius(response.data.main.temp),
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          description: response.data.weather[0].description,
          wind: mperSectoKmperhour(response.data.wind.speed),
          city: response.data.name,
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  static getCurrentWeatherByCity = (city) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
        );

        resolve({
          temp: kelvineToCelsius(response.data.main.temp),
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          description: response.data.weather[0].description,
          wind: mperSectoKmperhour(response.data.wind.speed),
          city: response.data.name,
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  static getForecastWeatherByCity = (city) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
        );
        const filteredList = {
          hour: [],
          temp: [],
          humidity: [],
          wind: [],
        };

        for (let i = 0; i < 8; i++) {
          filteredList.hour.push(
            response.data.list[i].dt_txt.split(" ")[1].slice(0, 5)
          );
          filteredList.temp.push(
            kelvineToCelsius(response.data.list[i].main.temp)
          );
          filteredList.humidity.push(response.data.list[i].main.humidity);
          filteredList.wind.push(
            mperSectoKmperhour(response.data.list[i].wind.speed)
          );
        }

        resolve(filteredList);
      } catch (e) {
        reject(e);
      }
    });
  };

  static getForecastWeatherByCoordinates = (lat, lon) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`
        );
        const filteredList = {
          hour: [],
          temp: [],
          humidity: [],
          wind: [],
        };

        for (let i = 0; i < 8; i++) {
          filteredList.hour.push(
            response.data.list[i].dt_txt.split(" ")[1].slice(0, 5)
          );
          filteredList.temp.push(
            kelvineToCelsius(response.data.list[i].main.temp)
          );
          filteredList.humidity.push(response.data.list[i].main.humidity);
          filteredList.wind.push(
            mperSectoKmperhour(response.data.list[i].wind.speed)
          );
        }

        resolve(filteredList);
      } catch (e) {
        reject(e);
      }
    });
  };
}

export default WeatherService;
