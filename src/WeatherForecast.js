import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;

  const apiKey = `575c34ae9e568091893014cdffd7e002`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <h3>Forecast</h3>
      <div className="row">
        <div className="col">
          <div className="forecast-day">Saturday</div>
          <WeatherIcon code="01d" />
          <div className="forecast-temps">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
