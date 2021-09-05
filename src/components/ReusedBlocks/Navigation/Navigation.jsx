import './Navigation.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import iconAccountPath from '../../../images/icon-account.svg';

function Navigation () {

  const [buttonBurger, setButtonBurger] = React.useState(false);

  const handleButtonBurgerClick = (event) => {

    if(event.target.classList.contains('navigation__burger')) {
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
    }
    if(event.target.classList.contains('navigation__burger-span')){
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
    }
    
  }

  return (
      <div className={`navigation__navbar-wrapper ${buttonBurger ? 'navigation__navbar-wrapper_active' : ''}`}>

        <div className={`navigation__burger ${buttonBurger ? 'navigation__burger_active' : ''}`} onClick={handleButtonBurgerClick}>
          <span className={`navigation__burger-span ${buttonBurger ? 'navigation__burger-span_active' : ''}`}></span>
        </div>
        
        <div className={`navigation__navbar ${buttonBurger ? 'navigation__navbar_active' : ''}`}>

          <nav className={`navigation__menu ${buttonBurger ? 'navigation__menu_active' : ''}`}>
            <ul className="navigation__menu-unordered-list">
              <li className="navigation__menu-list-item">
                <NavLink exact to="/" className="navigation__menu-link-item" activeClassName="navigation__menu-link-item_active" >Главная</NavLink>
              </li>
              <li className="navigation__menu-list-item">
                <NavLink to="/movies" className="navigation__menu-link-item" activeClassName="navigation__menu-link-item_active">Фильмы</NavLink>
              </li>
              <li className="navigation__menu-list-item">
                <NavLink to="/saved-movies"className="navigation__menu-link-item" activeClassName="navigation__menu-link-item_active">Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </nav>

          <div className="navigation__profile">
              <NavLink to="/profile" className="navigation__profile-link" activeClassName="navigation__profile-link_active"> Аккаунт</NavLink>
            <div className="navigation__profile-wrapper">
              <img className="navigation__profile-image" src={iconAccountPath} alt="Иконка аккаунта"/>
            </div>
          </div>

        </div>

      </div>
  );
}

export default Navigation;