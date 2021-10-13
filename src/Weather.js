import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-branding w-100"
              />
            </div>
          </div>
        </form>
        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="partly cloudy"
                className="float-left"
              />
              <span className="temperature float-left">{temperature}</span>
              <span className="unit"> °C</span>

              <ul>
                <li>Feels like 30° C</li>
                <li>Humidity: 85%</li>
                <li>Wind: 1.34 km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <h1>Bangkok</h1>
            <ul>
              <li>Monday 15:00</li>
              <li>Partly cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `575c34ae9e568091893014cdffd7e002`;
    let city = 'Bangkok';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return 'Loading weather...';
  }
}
