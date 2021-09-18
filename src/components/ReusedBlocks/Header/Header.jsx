import React from 'react';
import './Header.css';
import logoPath from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header className="header">
      <Link to="/">
        <img src={logoPath} alt="Иконка логотипа" className="logo header__logo"/>
      </Link>
      {props.children}
    </header>
  );
};

export default Header;