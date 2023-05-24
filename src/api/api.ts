import axios from "axios";
const apiId = "53ce2eaf707ffa9d6e6ce83387ab2cbb";
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export const currentWeather = () => {
  return axios
    .get(`${baseUrl}weather?lat=52.09755&lon=23.68775&units=metric&appid=${apiId}`)
    .then((value) => value.data);
};

export const forecastFiveDays = () => {
  return axios
    .get(`${baseUrl}forecast?lat=52.09755&lon=23.68775&units=metric&appid=${apiId}`)
    .then((value) => value.data);
};
