import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo(){
  return (
    <section className="training-project">
      <dev className="training-project__wrapper">
        <h1 className="training-project__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </dev>
    </section>
  );
}

export default Promo;