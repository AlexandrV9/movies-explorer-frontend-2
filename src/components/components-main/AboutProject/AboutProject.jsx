import React from 'react';
import BlockName from '../../ReusedBlocks/BlockName/BlockName';
import './AboutProject.css';

function AboutTheProject(){
  return (
    <section className="about-the-project"id="project">
      <div className="content-wrapper">
        <BlockName name="О проекте"/>
        <div className="about-the-project__content-box">
          <div className="about-the-project__left-column-text column-text">
            <h3 className="left-column-text__title column-text__title">Дипломный проект включал 5 этапов</h3>
            <p className="left-column-text__paragraph column-text__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-the-project__right-column-text column-text">
            <h3 className="right-column-text__title column-text__title">На выполнение диплома ушло 5 недель</h3>
            <p className="right-column-text__paragraph column-text__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-the-project__durationDiplomaProject">
          <table className="about-the-project__table">
            <tbody>
              <tr>
                <th className="about-the-project__table-first-column-title">1 неделя</th>
                <th className="about-the-project__table-second-column-title">4 недели</th>
              </tr>
              <tr>
                <td className="about-the-project__table-simple-text">Back-end</td>
                <td className="about-the-project__table-simple-text">Front-end</td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
      
    </section>
  );
}

export default AboutTheProject;