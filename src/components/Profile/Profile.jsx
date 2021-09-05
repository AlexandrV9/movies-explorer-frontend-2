import React from 'react';
import './Profile.css';
import Header from '../ReusedBlocks/Header/Header';
import Navigation from '../ReusedBlocks/Navigation/Navigation';
import { CurrentUser } from '../../contexts/CurrentUser';

function Profile ({
  userData,
  setLoggedIn,
  onUpdateUser,
}) {

  const currentUser = React.useContext(CurrentUser);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if(currentUser.name){
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  },[currentUser]);

  const handleButtonLogOff = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  const [emailDirty, setEmailDirty] = React.useState(false);
  const [nameDirty, setNameDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState('Имя не может быть пустым');
  const [emailError, setEmailError] = React.useState('E-mail не может быть пустым');

  const handlerBlur = (event) => {
    if(event.target.length > 0){
      setEmailDirty('');
      setNameDirty('');
    }
    else {
      switch (event.target.name) {
        case 'email':
          setEmailDirty(true);
          break;
        case 'name':
          setNameDirty(true);
          break;
        default:
          break;
      }
    }
    
  }

  React.useEffect(() => {
    setNameError('');
    setEmailError('');
  },[]);

  React.useEffect(() => {
    if(emailError || nameError){
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError]);

  const handleChangeEmail = event => {
    setEmail(event.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Неккорректный E-mail');
    } else {
      setEmailError('');
    }
  }

  const handleChangeName = event => {
    setName(event.target.value);
    const re = /^[a-zа-я1-9\s]+$/;
    if(!re.test(String(event.target.value).toLowerCase())) {
      setNameError('Неккорректное имя');
    } else {
      setNameError('');
    }
  }

  const handleButtonUpdateProfile = (event) => {
    event.preventDefault();
    onUpdateUser({
      name,
      email
    })
  }


  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile-content">
        <h1 className="profile-content__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile-content__profile-data">
            <form className="profile__form" noValidate onSubmit={event => handleButtonUpdateProfile(event)}>
              <div className="profile__form-wrapper">
                <p className="profile__text-input profile__text-name-input">Имя</p>  
                <input
                  id="input_type_name"
                  type="text"
                  name="name"
                  value={name}
                  className="profile__input profile__input_type_name"
                  minLength="2"
                  maxLength="30"
                  placeholder=" "
                  autoComplete="off"
                  onChange={event => handleChangeName(event)}
                  onBlur={event => handlerBlur(event)}
                />
                {(nameDirty && nameError) && <span className="profile__input-error profile__text-name-error">{nameError}</span>}
              </div>

              <div className="profile__form-wrapper">
                <p className="profile__text-input profile__text-email-input">Почта</p>  
                <input
                  id="input_type_email"
                  type="url"
                  name="email"
                  value={email}
                  className="profile__input profile__input_type_email"
                  minLength="2"
                  maxLength="30"
                  placeholder=" "
                  autoComplete="off"
                  onChange={event => handleChangeEmail(event)}
                  onBlur={event => handlerBlur(event)}
                />
                {(emailDirty && emailError) && <span className="profile__input-error profile__text-email-error">{emailError}</span>}
              </div>

               <button disabled={!formValid} className="button profile__button">Редактировать</button>

            </form>
          </div>
        <button className="profile-content__button-sign-out-of-account" onClick={handleButtonLogOff}>Выйти из аккаунта</button>

      </section>
    </>
  );
}

export default Profile;