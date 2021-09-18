import React from 'react';
import './Register.css';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Register ({
  userData,
  setUserData,
  onRegister
}) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState('Имя не может быть пустым');
  const [emailError, setEmailError] = React.useState('E-mail не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const handlerBlur = (event) => {
    switch (event.target.name) {
      case 'name':
        setNameDirty(true);
        break;
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
    if(nameError || emailError || passwordError){
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

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
  const handleChangeName = event => {
    const { name, value } = event.target;
    setName(event.target.value);
    const re = /^[a-zа-я\s]+$/;
    if(!re.test(String(event.target.value).toLowerCase())) {
      setNameError('Неккорректное имя');
    } else {
      setNameError('');
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
    const { name, email, password } = userData;
    event.preventDefault();
    onRegister({ name, email, password });
  }

  return (
    <section className="register">
      <div className="register__wrapper">
        <Link to="/"><img src={logoPath} alt="Иконка логотипа" className="logo register__logo"/></Link>
        <h1 className="register__greeting-text">Добро пожаловать!</h1>
        <form className="register__form" noValidate onSubmit={event => handleSubmit(event)}>

          <div className="register__form-wrapper">
            <input
              id="input_type_name"
              type="text"
              name="name"
              value={name}
              className="register__input register__input_type_name"
              minLength="2"
              maxLength="30"
              placeholder=" "
              required
              onChange={event => handleChangeName(event)}
              onBlur={event => handlerBlur(event)}
            />
            {(nameDirty && nameError) && <span className="register__input-error register__text-name-error">{nameError}</span>}
            <label className="register__label">Имя</label>
          </div>

          

          <div className="register__form-wrapper">
            <input
              id="input_type_email"
              type="url"
              name="email"
              value={email}
              className="register__input register__input_type_email"
              minLength="2"
              maxLength="30"
              placeholder=" "
              onChange={event => handleChangeEmail(event)}
              onBlur={event => handlerBlur(event)}
              required
            />
            {(emailDirty && emailError) && <span className="register__input-error register__text-email-error">{emailError}</span>}
            <label className="register__label">E-mail</label>
          </div>

          <div className="register__form-wrapper">
            <input
              id="input_type_password"
              type="password"
              name="password"
              value={password}
              className="register__input register__input_type_password"
              placeholder=" "
              onChange={event => handleChangePassword(event)}
              onBlur={event => handlerBlur(event)}
              required
            />
            <label className="register__label">Пароль</label>
            {(passwordDirty && passwordError) && <span className="register__input-error register__text-password-error">{passwordError}</span>}
          </div>

          <button disabled={!formValid} className="button register__button">Зарегистрироваться</button>

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