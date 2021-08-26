import React from 'react';
import iconLink from '../../../images/icon-link.svg';
import './Portfolio.css';

function Portfolio () {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__unordered-list">
        <li className="portfolio__item-list">
          <a href="#2" className="portfolio__item-link" target="_blank">Статичный сайт</a>
          <img src={iconLink} alt="Иконка ссылки" className="portfolio__icon-link" />
        </li>
        <li className="portfolio__item-list">
          <a href="#2" className="portfolio__item-link" target="_blank">Адаптивный сайт</a>
          <img src={iconLink} alt="Иконка ссылки" className="portfolio__icon-link" />
        </li>
        <li className="portfolio__item-list">
          <a href="#3" className="portfolio__item-link" target="_blank">Одностраничное приложение</a>
          <img src={iconLink} alt="Иконка ссылки" className="portfolio__icon-link" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;