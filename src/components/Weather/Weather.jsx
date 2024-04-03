import { useState } from 'react';
import './Weather.css';
import '../Days/Days.css';
import "../App/App.css";
import iconSun from "../../assets/sun.svg";

function Weather() {
  return (
          <div className="card-content white-text">
            <span className="card-title">Lyon</span>
            <p><img src={ iconSun } alt="Sun icon" /></p>
            <span className="temperature">15°</span>
            <div className="wind">Vent 1km/h (360°)</div>
          </div>
  );
}

export default Weather;