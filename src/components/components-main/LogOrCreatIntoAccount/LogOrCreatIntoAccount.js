import './LogOrCreatIntoAccount.css';
import { Link } from 'react-router-dom'

function LogOrCreatIntoAccount(){
  return (
    <nav className="log-or-creat-into-account__navbar">
      <Link className="log-or-creat-into-account__register-text" to="/signup"> Регистрация</Link>
      <Link className="log-or-creat-into-account__login-link" to="/signin">
        <button className="button log-or-creat-into-account__button">Войти</button>
      </Link>
      
    </nav>
  );
};

export default LogOrCreatIntoAccount;