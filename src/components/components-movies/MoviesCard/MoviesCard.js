import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom'
// import pathIconNotesInactive from '../../../images/icon-notes.svg';
// import pathIconNotesActive from '../../../images/icon-notes-active.svg';

function MoviesCard ({ name, duration, linkMovie, pathIconNotesInactive, pathIconNotesActive}) {

  const location = useLocation();
  
  const [isActiveButtonNotes, setIsActiveButtonNotes] = React.useState(false);

  const handleButtonNotesClick = () => {
    return setIsActiveButtonNotes(!isActiveButtonNotes);
  }

  return (
    <li class="movies-card-list__item-list">
      <div class="movies-card-list__item-wrapper">
        <h3 class="movies-card-list__item-title">{name}</h3>
        <p class="movies-card-list__item-subtitle">{duration}</p>
          {location.pathname === '/saved-movies' ? 

            <button className='button movies-card-list__button-delete'onClick={handleButtonNotesClick}>
              <img src={pathIconNotesInactive} alt="Иконка удаления" className="movies-card-list__icon-delete" /> 
            </button>

            :

            <button className={`button movies-card-list__button-notes ${isActiveButtonNotes ?  'movies-card-list__button-notes_active':''}`} onClick={handleButtonNotesClick}>
              <img src={isActiveButtonNotes ? pathIconNotesActive : pathIconNotesInactive} alt="Иконка заметки" className="movies-card-list__icon-notes" /> 
            </button>
            
          }
        
      </div>
      <img src={linkMovie} alt="" class="movies-card-list__item-image" />
    </li>
  );
}

export default MoviesCard;