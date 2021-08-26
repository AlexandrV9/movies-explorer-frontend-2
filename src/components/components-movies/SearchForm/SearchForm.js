import React from 'react';
import './SearchForm.css';
import iconSearchPath from '../../../images/icon-search.svg';
import Switch from '../../../components/ReusedBlocks/Switch/Switch';
// import { useForm } from 'react-hook-form';

function SearchForm ({
  movies,
  onSortMovies,
}) {

  const [nameMovie, setNameMovie] = React.useState('');

  // const [foundMovies, setFoundMovies] = React.useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    onSortMovies(movies, nameMovie);
  }
    

  const handleChange = event => setNameMovie(event.target.value);

  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <img src={iconSearchPath} alt="Иконка поиска" className="search-form__icon-search" />
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <input 
            id="input_type_search"
            type="search"
            name="search"
            className="search-form__input_type_search"
            placeholder="Фильм"
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <span className="search-form__input-error input_type_search-error"></span>

          <button className="search-form__button">Найти</button>
        </form>
      </div>

      <div className="search-form__content-wrapper">
        <Switch />
        <p className="search-form__subtitle">Короткометражки</p>
      </div>
      
    </section>
  );
}

export default SearchForm;