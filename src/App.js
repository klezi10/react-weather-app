import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          This project was coded by{' '}
          <a
            href="https://clever-turing-3f9e94.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Klesta Luli
          </a>{' '}
          |{' '}
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
