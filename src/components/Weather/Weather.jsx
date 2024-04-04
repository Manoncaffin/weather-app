import './Weather.css';
import '../Days/Days.css';
import "../App/App.css";
import iconSun from "../../assets/sun.svg";
import iconRainy from "../../assets/rainy.svg";
import iconCloudySun from "../../assets/cloudy-sun.svg";
import iconCloudy from "../../assets/cloudy.svg";
import iconSnowy from "../../assets/snowy.svg";
import iconStorm from "../../assets/storm.svg";
import iconThunder from "../../assets/thunder.svg";
import iconWindy from "../../assets/windy.svg";

function Weather({ weatherData }) {
  let weatherIcon;

  // Sélectionnez l'icône en fonction du type de météo
  if (weatherData.weatherType === 'sun') {
    weatherIcon = iconSun;
  } else if (weatherData.weatherType === 'rainy') {
    weatherIcon = iconRainy;
  } else if (weatherData.weatherType === 'cloudySun') {
    weatherIcon = iconCloudySun;
  } else if (weatherData.weatherType === 'cloudy') {
    weatherIcon = iconCloudy;
  } else if (weatherData.weatherType === 'snowy') {
    weatherIcon = iconSnowy;
  } else if (weatherData.weatherType === 'storm') {
    weatherIcon = iconStorm;
  } else if (weatherData.weatherType === 'thunder') {
    weatherIcon = iconThunder;
  } else if (weatherData.weatherType === 'windy') {
    weatherIcon = iconWindy;
  }

  return (
    <>
      <span className="card-title">{weatherData.city}</span>
      <p><img src={weatherIcon} alt="Weather icon" /></p>
      <span className="temperature">{weatherData.temperature}°</span>
      <div className="wind">Vent {weatherData.windSpeed} km/h ({weatherData.windDirection}°)</div>
    </>
  );
}

export default Weather;