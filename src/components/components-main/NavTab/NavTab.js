import './NavTab.css'

function NavTab(){
  return (
    <ul className="training-project__unordered-list">
      <li className="training-project__list-item"><a href="#project" className="training-project__link-item">О проекте</a></li>
      <li className="training-project__list-item"><a href="#tech" className="training-project__link-item">Технологии</a></li>
      <li className="training-project__list-item"><a href="#about-me" className="training-project__link-item">Студент</a></li>
    </ul>
  );
}

export default NavTab;