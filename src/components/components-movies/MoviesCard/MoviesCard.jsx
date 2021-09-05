import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard ({
  movie,
  pathIconNotesInactive,
  pathIconNotesActive, 
  onSaveMovie,
}) {

  const location = useLocation();
  
  return (
    
    <li className="movies-card-list__item-list">
      <div className="movies-card-list__item-wrapper">
        <h3 className="movies-card-list__item-title">{movie.nameRU}</h3>
        <p className="movies-card-list__item-subtitle">{movie.duration}</p>
          {location.pathname === '/saved-movies' ? 

            <button className='button movies-card-list__button-delete'onClick={() => onSaveMovie(movie)}>
              <img src={pathIconNotesInactive} alt="Иконка удаления" className="movies-card-list__icon-delete"/> 
            </button>

            :

            <button className={`button movies-card-list__button-notes ${movie.isLike ?  'movies-card-list__button-notes_active':''}`} onClick={() => onSaveMovie(movie)}>
              <img src={movie.isLike ? pathIconNotesActive : pathIconNotesInactive} alt="Иконка заметки" className="movies-card-list__icon-notes"/> 
            </button>
            
          }
        
      </div>
      <img src={movie.image} alt="Изображение" className="movies-card-list__item-image" />
    </li>
  );
}

export default MoviesCard;