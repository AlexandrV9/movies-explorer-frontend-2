import './AboutMe.css';
import studentPhotoPath from '../../../images/student-photo.jpg';
import BlockName from '../../ReusedBlocks/BlockName/BlockName';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(){
  return (
    <section className="student" id="about-me">
      <div className="content-wrapper">
        <BlockName name="Студент"/>
        <div className="student__wrapper">
          <div className="student__content">
            <h2 className="student__name">Виталий</h2>
            <h3 className="student__profession">Фронтенд-разработчик, 30 лет</h3>
            <p className="student__autobiography">Я родился и живу в Саратове, закончил   факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал  кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал заниматься  фриланс-заказами и ушёл с постоянной
            работы.</p>
            <ul className="student__unordered-list">
              <li className="student__item-list">
                <a href="#1" className="student__item-link" target="_blank">Facebook</a>
              </li>
              <li className="student__item-list">
                <a href="#2" className="student__item-link" target="_blank">Github</a>
              </li>
            </ul>
          </div>
          <img src={studentPhotoPath} alt="Фотография студента" className="student__image" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;