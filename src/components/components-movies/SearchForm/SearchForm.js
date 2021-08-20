import './SearchForm.css';
import iconSearchPath from '../../../images/icon-search.svg';
import Switch from '../../../components/ReusedBlocks/Switch/Switch';

function SearchForm () {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <img src={iconSearchPath} alt="Иконка поиска" className="search-form__icon-search" />
        <form className="search-form__form">
          <input 
            id="input_type_search"
            type="search"
            name="search"
            className="search-form__input_type_search"
            minLength="2"
            maxLength="30"
            autocomplete="off"
            placeholder="Фильм"
            required
          />
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