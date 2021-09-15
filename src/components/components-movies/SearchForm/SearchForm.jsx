import React from 'react';
import './SearchForm.css';
import iconSearchPath from '../../../images/icon-search.svg';

function SearchForm ({
  movies,
  onSortMovies,
  onIsActivePreloader,
  handleShowShortFilms,
  checkedSort,
}) {

  const [nameMovie, setNameMovie] = React.useState('');
  const [checked, setChecked] = React.useState(checkedSort);

  const handleSubmit = event => {
    event.preventDefault();
    onSortMovies(movies, nameMovie, checked);
  }

  const handleButtonSearchClik = () => {
    onIsActivePreloader();
  }
    
  const handleChange = event => setNameMovie(event.target.value);
  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <section className="search-form">
      <div className="search-form__wrapper">  
        <img src={iconSearchPath} alt="Иконка поиска" className="search-form__icon-search" />
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
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
      </div>

      <div className="search-form__content-wrapper">
        <input type="checkbox" className="switch__input" checked={checked} onChange={handleChecked} onClick={() => handleShowShortFilms(checked, nameMovie)}/>
        <p className="search-form__subtitle">Короткометражки</p>
      </div>
      
    </section>
  );
}

export default SearchForm;