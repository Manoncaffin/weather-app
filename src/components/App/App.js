import React, { useEffect, useState } from 'react';

import './App.css';
import Weather from '../Weather/Weather';
import Days from '../Days/Days';
import Header from '../Header/Header';
import axios from 'axios';


function App() {

  const [weatherData, setWeatherData] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState("Thurday");
  
  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // Solution de dernier recours (useEffect)
  useEffect(() => {
    axios.get(`${apiUrl}?key=${apiKey}&q=Lyon&days=5&aqi=no&alerts=no`)
      .then(function (response) {
        // en cas de réussite de la requête
        if (!isDataLoaded)
          setWeatherData(response.data);
        setIsDataLoaded(true);
        console.log(weatherData);
      })
      .catch(function (error) {
        // en cas d'échec de la requête
        console.log(error)
      })
  }, [apiUrl, apiKey]); // Ajoutez les dépendances nécessaires; 
  
  function handleClickDay(event, day) {
    event.preventDefault();
    setSelectedDay(day);

    const selected = event.target.innerText; // Récupérez le jour sélectionné depuis le texte de l'élément cliqué
    setSelectedDay(selected); // Mettez à jour le jour sélectionné
  }

  return (
    <div className="App">
      {/* Le composant Header affiche l'en-tête de l'application. */}
      <Header />
      {/* Le composant Weather affiche les informations météorologiques. */}
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
            {/* Passez les données météorologiques du jour sélectionné au composant Weather */} 
            <Weather weatherData={weatherData[selectedDay]} /> 
              </div>
              {/* Le composant Days affiche les liens vers les jours de la semaine. */}
              <div className="card-action">
                <Days handleClickDay={handleClickDay}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

