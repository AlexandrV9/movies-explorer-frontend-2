import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard ({
  deleteButtonSaveMoviesClick,
  movie,
  saveMovies,
  setSaveMovies,
  pathIconNotesInactive,
  pathIconNotesActive, 
  handleButtonSaveMoviesClick
}) {

  const location = useLocation();

  const secondPartUrl = movie.image.url;
  
  const [isActiveButtonNotes, setIsActiveButtonNotes] = React.useState(false);

  const handleButtonNotesClick = () => {
    setIsActiveButtonNotes(!isActiveButtonNotes);
    
  }

  return (
    <li className="movies-card-list__item-list">
      <div className="movies-card-list__item-wrapper">
        <h3 className="movies-card-list__item-title">{movie.nameRU}</h3>
        <p className="movies-card-list__item-subtitle">{movie.duration}</p>
          {location.pathname === '/saved-movies' ? 

            <button className='button movies-card-list__button-delete'onClick={handleButtonNotesClick}>
              <img src={pathIconNotesInactive} alt="Иконка удаления" className="movies-card-list__icon-delete"/> 
            </button>

            :

            <button className={`button movies-card-list__button-notes ${isActiveButtonNotes ?  'movies-card-list__button-notes_active':''}`} onClick={handleButtonNotesClick}>
              <img src={isActiveButtonNotes ? pathIconNotesActive : pathIconNotesInactive} alt="Иконка заметки" className="movies-card-list__icon-notes" onClick={() => handleButtonSaveMoviesClick(movie)}/> 
            </button>
            
          }
        
      </div>
      <img src={`https://api.nomoreparties.co${secondPartUrl}`} alt="Изображение" className="movies-card-list__item-image" />
    </li>
  );
}

export default MoviesCard;