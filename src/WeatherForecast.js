import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecast() {
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
