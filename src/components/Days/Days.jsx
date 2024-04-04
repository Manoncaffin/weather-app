import  { useState} from 'react';
import "./Days.css";
import '../Weather/Weather.css';
import "../App/App.css";

// CODE COMMUN
function Days({ handleClickDay }) {
  // SECOND CODE :
  const [selectedDay, setSelectedDay] = useState(null); // Ajout d'une variable d'état pour suivre le jour sélectionné

  // Fonction pour gérer le clic sur un jour
  const handleClick = (event, day) => {
    event.preventDefault();
    setSelectedDay(day); // Met à jour le jour sélectionné
    handleClickDay(event); // Appelle la fonction handleClickDay passée en tant que prop
  };

  return (
    <>
      <a href="#" className={selectedDay === 'Thursday' ? 'clickedDay' : ''} onClick={(event) => handleClick(event, 'Thursday')}>
        Thursday
      </a>
      <a href="#" className={selectedDay === 'Friday' ? 'clickedDay' : ''} onClick={(event) => handleClick(event, 'Friday')}>
        Friday
      </a>
      <a href="#" className={selectedDay === 'Saturday' ? 'clickedDay' : ''} onClick={(event) => handleClick(event, 'Saturday')}>
        Saturday
      </a>
      <a href="#" className={selectedDay === 'Sunday' ? 'clickedDay' : ''} onClick={(event) => handleClick(event, 'Sunday')}>
        Sunday
      </a>
      <a href="#" className={selectedDay === 'Monday' ? 'clickedDay' : ''} onClick={(event) => handleClick(event, 'Monday')}>
        Monday
      </a>
    </>
  );
}

export default Days;


  // PREMIER CODE 
//   return (
//     <>
//     <a href="#" className="clickedDay" onClick={handleClickDay} >
//       Thursday
//     </a>
//     <a href="#" onClick={handleClickDay}>Friday</a>
//     <a href="#" onClick={handleClickDay}>Saturday</a>
//     <a href="#" onClick={handleClickDay}>Sunday</a>
//     <a href="#" onClick={handleClickDay}>Monday</a>
//     </>
//   );
// }

// export default Days;