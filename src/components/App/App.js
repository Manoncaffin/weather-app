import './App.css';
import '../Weather/Weather.css';
import '../Days/Days.css';
import React from 'react';
import Weather from '../Weather/Weather.jsx';
import Days from '../Days/Days.jsx';
import Header from '../Header/Header.jsx';

// La fonction App est le composant principal de notre application.
// Elle renvoie une structure JSX qui représente la disposition générale de notre application.

// Nous utilisons la fonction return pour renvoyer le contenu JSX du composant App.
// Ce contenu consiste en un élément <div> avec la classe CSS "App".
// À l'intérieur de cette <div>, nous appelons les composants Header, Weather et Days,
// qui sont responsables de différentes parties de l'interface utilisateur de notre application.
// Ces composants sont inclus dans le composant App pour les organiser et les intégrer dans l'application.

function App() {
  return (
    <div className="App">
      {/* Le composant Header affiche l'en-tête de l'application. */ }
      <Header />
      {/* Le composant Weather affiche les informations météorologiques. */ }
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <Weather />
            {/* Le composant Days affiche les liens vers les jours de la semaine. */ }
            <Days />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

