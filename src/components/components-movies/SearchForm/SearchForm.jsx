import React from 'react';
import { useLocation } from 'react-router';
import './SearchForm.css';
import iconSearchPath from '../../../images/icon-search.svg';

function SearchForm ({
  movies,
  handleSortMovies,
  handleSortSaveMovies,
  onIsActivePreloader,
  handleShowShortFilms,
  handleShowShortSaveFilms,
  checkedSort,
  checkedSave,
  handleCheckedSort,
  handleCheckedSave,

}) {
  const location = useLocation();
  const [nameMovie, setNameMovie] = React.useState('');

  const handleSubmitSort = event => {
    event.preventDefault();
    handleSortMovies(movies, nameMovie, checkedSort);
  }

  const handleSubmitSave = event => {
    event.preventDefault();
    handleSortSaveMovies(movies, nameMovie, checkedSave);
  }

  const handleButtonSearchClik = () => {
    onIsActivePreloader();
  }
    
  const handleChange = event => setNameMovie(event.target.value);

  return (
    <section className="search-form">
      <div className="search-form__wrapper">  
        <img src={iconSearchPath} alt="Иконка поиска" className="search-form__icon-search" />

        {location.pathname === '/saved-movies' ? 
          <form className="search-form__form" onSubmit={handleSubmitSave} noValidate>
            <p className="search-form__form-title">Фильм</p>
          <input 
            id="input_type_search"
            type="search"
            name="search"
            value={nameMovie}
            className="search-form__input_type_search"
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <span className="search-form__input-error input_type_search-error"></span>

          <button className="search-form__button" onClick={handleButtonSearchClik}>Найти</button>
        </form>


          :


          <form className="search-form__form" onSubmit={handleSubmitSort} noValidate>
            <p className="search-form__form-title">Фильм</p>
          <input 
            id="input_type_search"
            type="search"
            name="search"
            value={nameMovie}
            className="search-form__input_type_search"
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <span className="search-form__input-error input_type_search-error"></span>

          <button className="search-form__button" onClick={handleButtonSearchClik}>Найти</button>
        </form>
        }
          
      </div>

      <div className="search-form__content-wrapper">
        
        {location.pathname === '/saved-movies' ? 
          <input type="checkbox" className="switch__input" checked={checkedSave} onChange={handleCheckedSave} onClick={() => handleShowShortSaveFilms(checkedSave, nameMovie)}/>
              :
          <input type="checkbox" className="switch__input" checked={checkedSort} onChange={handleCheckedSort} onClick={() => handleShowShortFilms(checkedSort, nameMovie)}/>
        }
        
        <p className="search-form__subtitle">Короткометражки</p>
      </div>
      
    </section>
  );
}

export default SearchForm;