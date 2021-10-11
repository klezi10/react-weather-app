import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary"
            />
          </div>
        </div>
      </form>
      <h1>Bangkok</h1>
      <ul>
        <li>Monday 15:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          ></img>
          31°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 85%</li>
            <li>Wind: 1.34 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
