import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';


function Login ({
  userData,
  setUserData,
  onLogin,
}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const [emailError, setEmailError] = React.useState('E-mail не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const handlerBlur = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  }

  React.useEffect(() => {
    if(emailError || passwordError){
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handleChangeEmail = event => {
    const { name, value } = event.target;
    setEmail(event.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Неккорректный E-mail');
    } else {
      setEmailError('');
    }
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleChangePassword = event => {
    const { name, value } = event.target;
    setPassword(event.target.value);
    if(event.target.value.length <3 || event.target.value.length > 15){
      setPasswordError('Пароль должен быть длинее 3 и меньше 15 символов');
      if(!event.target.value){
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleSubmit = event => {
    const { email, password } = userData;
    event.preventDefault();
    onLogin({ email, password });
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/"><img src={logoPath} alt="Иконка логотипа" className="logo register__logo"/></Link>
        <h1 className="login__greeting-text">Рады видеть!</h1>
        <form className="login__form" noValidate onSubmit={event => handleSubmit(event)}>

          <div className="login__form-wrapper">    
            <input
              id="input_type_email"
              type="url"
              name="email"
              value={email}
              className="login__input login__input_type_email"
              minLength="2"
              maxLength="30"
              placeholder=" "
              onChange={event => handleChangeEmail(event)}
              onBlur={event => handlerBlur(event)}
              required
            />
            {(emailDirty && emailError) && <span className="login__input-error login__text-email-error">{emailError}</span>}
            <label className="login__label">E-mail</label>
          </div>

          <div className="login__form-wrapper">
            <input
              id="input_type_password"
              type="password"
              name="password"
              value={password}
              className="login__input login__input_type_password"
              placeholder=" "
              onChange={event => handleChangePassword(event)}
              onBlur={event => handlerBlur(event)}
              required
            />
            <label className="login__label">Пароль</label>
            {(passwordDirty && passwordError) && <span className="login__input-error login__text-password-error">{passwordError}</span>}
          </div>

          <button disabled={!formValid} className="button login__button">Войти</button>

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