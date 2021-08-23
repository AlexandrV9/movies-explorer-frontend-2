import './Header.css';
import logoPath from '../../../images/logo.svg';

function Header(props){
  return (
    <header className="header">
      <img src={logoPath} alt="Иконка логотипа" className="logo header__logo"/>
      {props.children}
    </header>
  );
};

export default Header;