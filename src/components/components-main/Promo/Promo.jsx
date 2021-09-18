import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo(){
  return (
    <section className="training-project">
      <div className="training-project__wrapper">
        <h1 className="training-project__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;