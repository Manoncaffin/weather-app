import { useState } from 'react';
import "./Days.css";
import '../Weather/Weather.css';
import "../App/App.css";

function Days() {
  // return (
  //   <div className="card-action">
  //     <a href="#" className='Days'>Thursday</a>
  //     <a href="#">Friday</a>
  //     <a href="#">Saturday</a>
  //     <a href="#">Sunday</a>
  //     <a href="#">Monday</a>
  //   </div>
  // );
  // Obtenir la date d'aujourd'hui
  const today = new Date();
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Fonction pour obtenir la date du jour suivant
  const getNextDay = (currentDate, increment) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + increment);
    return nextDate;
  };

  // Définir l'état local pour suivre le jour sélectionné
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[today.getDay() -2]);

  return (
    <div className="card-action">
      {Array.from({length: 5}, (_, i) => i).map((index) => {
        const day = daysOfWeek[(index)];
        return (
          <a key={index} href="#" className={selectedDay === day ? 'selected' : 'Days'} onClick={() => setSelectedDay(day)}>
            {day}
          </a>
        );
      })}
    </div>
  );
}

export default Days;