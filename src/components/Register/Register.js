import './Register.css';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Register () {
  return (
    <section className="register">
      <div className="register__wrapper">
        <Link to="/"><img src={logoPath} alt="Иконка логотипа" className="logo register__logo"/></Link>
        <h1 className="register__greeting-text">Добро пожаловать!</h1>
        <form className="register__form">

          <div className="register__form-wrapper">
            <input
              id="input_type_name"
              type="text"
              name="name"
              className="register__input register__input_type_name"
              minLength="2"
              maxLength="30"
              placeholder=" "
              required
            />
            <label className="register__label">Имя</label>
          </div>

          

          <div className="register__form-wrapper">    
            <input
              id="input_type_email"
              type="url"
              name="email"
              className="register__input register__input_type_email"
              minLength="2"
              maxLength="30"
              placeholder=" "
              required
            />
            <label className="register__label">E-mail</label>
          </div>

          

          <div className="register__form-wrapper">
            <input
              id="input_type_password"
              type="password"
              name="password"
              className="register__input register__input_type_password"
              placeholder=" "
              required
            />
            <label className="register__label">Пароль</label>
          </div>

          <button className="button register__button">Зарегистрироваться</button>

        </form>
        
        <div className="register__already">
            <p className="register__already-text">Уже зарегистрированы?</p>
            <Link className="register__already-link-authorization" to="/signin">Войти</Link>
          </div>
      </div>
    </section>
  );
}

export default Register;