import './MoviesCard.css';
import pathIconNotes from '../../../images/icon-notes.svg';

function MoviesCard ({ name, duration, linkMovie }) {
  return (
    <li class="movies-card-list__item-list">
      <div class="movies-card-list__item-wrapper">
        <h3 class="movies-card-list__item-title">{name}</h3>
        <p class="movies-card-list__item-subtitle">{duration}</p>
        <div className="movies-card-list__wrapper-icon">
          <img src={pathIconNotes} alt="Иконка заметки" className="movies-card-list__icon-notes" />
        </div>
      </div>
      <img src={linkMovie} alt="" class="movies-card-list__item-image" />
    </li>
  );
}

export default MoviesCard;