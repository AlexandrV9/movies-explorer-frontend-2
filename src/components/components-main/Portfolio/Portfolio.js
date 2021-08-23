import iconLink from '../../../images/icon-link.svg';
import './Portfolio.css';

function Portfolio () {
  return (
    <section className="portfolio">
      <h3 class="portfolio__title">Портфолио</h3>
      <ul class="portfolio__unordered-list">
        <li class="portfolio__item-list">
          <a href="#2" class="portfolio__item-link" target="_blank">Статичный сайт</a>
          <img src={iconLink} alt="Иконка ссылки" class="portfolio__icon-link" />
        </li>
        <li class="portfolio__item-list">
          <a href="#2" class="portfolio__item-link" target="_blank">Адаптивный сайт</a>
          <img src={iconLink} alt="Иконка ссылки" class="portfolio__icon-link" />
        </li>
        <li class="portfolio__item-list">
          <a href="#3" class="portfolio__item-link" target="_blank">Одностраничное приложение</a>
          <img src={iconLink} alt="Иконка ссылки" class="portfolio__icon-link" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;