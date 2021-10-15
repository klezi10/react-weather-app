import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import axios from 'axios';
import './Weather.css';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = `575c34ae9e568091893014cdffd7e002`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const apiKey = `575c34ae9e568091893014cdffd7e002`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-branding w-100"
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-branding w-100"
                onClick={handleGeolocation}
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return <Loader type="Puff" color="#2daffd" height={200} width={200} />;
  }
}
