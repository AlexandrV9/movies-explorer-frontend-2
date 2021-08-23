import './Login.css';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';


function Login () {
  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/"><img src={logoPath} alt="Иконка логотипа" className="logo register__logo"/></Link>
        <h1 className="login__greeting-text">Рады видеть!</h1>
        <form className="login__form">

          <div className="login__form-wrapper">    
            <input
              id="input_type_email"
              type="url"
              name="email"
              className="login__input login__input_type_email"
              minLength="2"
              maxLength="30"
              placeholder=" "
              required
            />
            <label className="login__label">E-mail</label>
          </div>

          <div className="login__form-wrapper">
            <input
              id="input_type_password"
              type="password"
              name="password"
              className="login__input login__input_type_password"
              placeholder=" "
              required
            />
            <label className="login__label">Пароль</label>
          </div>

          <button className="button login__button">Войти</button>

        </form>
        
        <div className="login__already">
            <p className="login__already-text">Ещё не зарегистрированы?</p>
            <Link className="login__link-registation" to="/signup">Регистрация</Link>
          </div>
      </div>
    </section>
  );
}

export default Login;