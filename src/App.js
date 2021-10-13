import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          This project was coded by Klesta |{' '}
          <a
            href="https://github.com/klezi10/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{' '}
        </footer>
      </div>
    </div>
  );
}
