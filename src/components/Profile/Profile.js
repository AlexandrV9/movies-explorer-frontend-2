import './Profile.css';
import Header from '../ReusedBlocks/Header/Header';
import Navigation from '../ReusedBlocks/Navigation/Navigation';

function Profile () {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile-content">
        <h1 className="profile-content__title">Привет, Виталий!</h1>
          <div className="profile-content__profile-data">
            <ul className="profile-content__unordered-list">
              <li className="profile-content__list-item">
                <p className="profile-content__name profile-content__text">Имя</p>
                <p className="profile-content__name-value profile-content__text">Виталий</p>
              </li>
              <li className="profile-content__list-item">
                <p className="profile-content__email profile-content__text">Почта</p>
                <p className="profile-content__email-value profile-content__text">pochta@yandex.ru</p>
              </li>
            </ul>
          </div>
          <button className="profile-content__button-registration">Редактировать</button>
          <button className="profile-content__button-sign-out-of-account">Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;