import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { handleСorrectTimeDisplay } from '../../../utils/utils';

function MoviesCard ({
  movie,
  pathIconNotesInactive,
  pathIconNotesActive, 
  onSaveMovie,
}) {

  const location = useLocation();

  const handleCardClik = () => {
    return window.location.href = movie.trailer;
  }

  return (
    
    <li className="movies-card-list__item-list">
      <div className="movies-card-list__item-wrapper">
        <h3 className="movies-card-list__item-title">{movie.nameRU}</h3>
        
          {location.pathname === '/saved-movies' ? 

            <button className='button movies-card-list__button-delete'onClick={() => onSaveMovie(movie)}>
              <img src={pathIconNotesInactive} alt="Иконка удаления" className="movies-card-list__icon-delete"/> 
            </button>

            :

            <button className={`button movies-card-list__button-notes ${movie.isLike ?  'movies-card-list__button-notes_active':''}`} onClick={() => onSaveMovie(movie)}>
              <img src={movie.isLike ? pathIconNotesActive : pathIconNotesInactive} alt="Иконка заметки" className="movies-card-list__icon-notes"/> 
            </button>
            
          }
          <p className="movies-card-list__item-subtitle">{handleСorrectTimeDisplay(movie.duration)}</p>
        </div>
        <img src={movie.image} alt="Изображение" className="movies-card-list__item-image" onClick={handleCardClik}/>
      
    </li>
  );
}

export default MoviesCard;