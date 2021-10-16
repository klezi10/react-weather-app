import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === 'celsius') {
    return (
      <span className="WeatherTemperature">
        <span className="temperature float-left">{props.celsius}</span>
        <span className="unit">
          {' '}
          °C{' '}
          <span className="d-none d-lg-inline">
            |{' '}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature float-left">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
          {' '}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{' '}
          | °F
        </span>
      </span>
    );
  }
}
