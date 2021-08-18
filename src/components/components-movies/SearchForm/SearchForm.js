import './SearchForm.css';
import iconSearchPath from '../../../images/icon-search.svg';
import Switch from '../../../components/ReusedBlocks/Switch/Switch';

function SearchForm () {
  return (
    <section class="search-form">
      <div className="search-form__wrapper">
        <img src={iconSearchPath} alt="Иконка поиска" class="search-form__icon-search" />
        <h1 class="search-form__title">Фильм</h1>
        <button class="button search-form__button">Найти</button>
      </div>
      <div className="search-form__content-wrapper">
        <Switch />
        <p class="search-form__subtitle">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;